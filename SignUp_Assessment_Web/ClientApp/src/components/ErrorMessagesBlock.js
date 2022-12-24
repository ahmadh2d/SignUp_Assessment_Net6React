import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

const ErrorMessagesBlock = ({ errorMessages }) => {
    return (
        <Card className="mb-4" color="danger" inverse>
            <CardHeader>Errors</CardHeader>
            <CardBody>
                <ul>
                    {errorMessages.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
            </CardBody>
        </Card>
    );
};

export default ErrorMessagesBlock;
