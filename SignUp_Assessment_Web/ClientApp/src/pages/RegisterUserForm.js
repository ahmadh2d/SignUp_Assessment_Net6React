import React, { useState } from "react";
import {
    Button,
    Form,
    Label,
    FormGroup,
    Input,
    Row,
    Col,
    Container,
    Alert
} from "reactstrap";
import ErrorMessagesBlock from "../components/ErrorMessagesBlock";
import { USER_REGISTER_URL } from "../config";

const RegisterUserForm = () => {
    const initialFormState = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    const [formData, setFormData] = useState(initialFormState);
    const [disableSubmitButton, setDisableSubmitButton] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showFailureAlert, setShowFailureAlert] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    const onSuccessAlertDismiss = () => setShowSuccessAlert(false);
    const onFailureAlertDismiss = () => setShowFailureAlert(false);

    const onUpdateField = (e) => {
        const { id, value } = e.target;

        setFormData({ ...formData, [id]: value });
    };

    const resetForm = async () => {
        setFormData(initialFormState);
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();
        setDisableSubmitButton(true);
        setErrorMessages([]);

        const response = await fetch(USER_REGISTER_URL, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });

        if (response.status === 200) {
            console.log(
                `Success! User '${formData.firstName} ${formData.lastName}' is created`
            );
            setShowSuccessAlert(true);
            setShowFailureAlert(false);
        } else {
            if (response.status === 400) {
                const responseData = await response.json();
                console.log(`Failed! User not registered`);
                const errors = [];
                if (responseData.errors) {
                    for (const key in responseData.errors) {
                        if (
                            Object.hasOwnProperty.call(responseData.errors, key)
                        ) {
                            errors.push(responseData.errors[key]?.join(" "));
                        }
                    }
                }
                setErrorMessages([...errors]);
                setShowSuccessAlert(false);
            }

            setShowFailureAlert(true);
        }

        setDisableSubmitButton(false);
    };

    return (
        <>
            <Container className="col-sm-12 col-md-6 offset-md-3">
                <Alert
                    color="success"
                    isOpen={showSuccessAlert}
                    toggle={onSuccessAlertDismiss}
                >
                    Success! User is registered now.
                </Alert>
                <Alert
                    color="danger"
                    isOpen={showFailureAlert}
                    toggle={onFailureAlertDismiss}
                >
                    Failed! User account not created.
                </Alert>

                <h2 className="mb-5 text-center">Create SHAPE Account</h2>

                {errorMessages?.length > 0 && <ErrorMessagesBlock errorMessages={errorMessages} />}

                <Form>
                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Label for="firstName">First Name</Label>
                                <Input
                                    type="text"
                                    id="firstName"
                                    placeholder="Enter First Name"
                                    value={formData.firstName}
                                    onChange={onUpdateField}
                                />
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label for="lastName">Last Name</Label>
                                <Input
                                    type="text"
                                    id="lastName"
                                    placeholder="Enter Last Name"
                                    value={formData.lastName}
                                    onChange={onUpdateField}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <FormGroup className="mb-3">
                        <Label for="email">Work Email Address</Label>
                        <Input
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={onUpdateField}
                        />
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            value={formData.password}
                            onChange={onUpdateField}
                        />
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <Label for="confirmPassword">Confirm Password</Label>
                        <Input
                            type="password"
                            id="confirmPassword"
                            placeholder="Enter Password Again"
                            value={formData.confirmPassword}
                            onChange={onUpdateField}
                        />
                    </FormGroup>

                    <Col className="btn-center">
                        <Button
                            variant="primary"
                            color="success"
                            size="lg"
                            type="submit"
                            onClick={onSubmitForm}
                            disabled={disableSubmitButton}
                        >
                            Sign Up
                        </Button>
                    </Col>
                </Form>
            </Container>
        </>
    );
};

export default RegisterUserForm;
