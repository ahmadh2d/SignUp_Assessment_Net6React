# SignUp_Assessment_Net6React

### Created using:
- Backend framework: .Net 6
- Frontend framework: REACT v18
- Visual Studio Template: .Net Core with (SAP) React
-   - Front-end code is in the ClientApp

### How to run:
  - Change the creds of DB Connection in the `appsetttings.development.json`
  - Press F5 in the Visual Studio
  - See opened terminal/CMDs to get API url and use Postman to send API requests like:
    - API URL: https://localhost:7041/api/useraccount/registeruser
    - Request Payload:
    
        ```
        {
            "firstName": "john",
            "lastName": "doe",
            "email": "john@mail.com",
            "password": "Test@123",
            "confirmPassword": "Test@123"
        }
        ```
