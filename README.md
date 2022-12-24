# SignUp App using Net6 and React for SHAPE

### Technology Used:
- Backend framework: .Net 6
- Frontend framework: REACT v18
- Visual Studio Template: .Net with (SAP) React
  - Front-end code is in the ClientApp
- IDE: Visual Studio 2022 (Windows 11)

### How to setup/run:
  - Change the DB connection string in the `appsetttings.development.json` 
  - Build the Project in VS2022
  - Run Migrations (In VS2022 -> Developer Console -> `Update-Database`)
  - Press F5 in the Visual Studio
  - To test API/backend, See opened terminal/debug window to get API url and use Postman to send API requests like:
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
