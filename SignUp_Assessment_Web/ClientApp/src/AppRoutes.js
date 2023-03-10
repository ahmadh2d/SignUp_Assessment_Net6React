import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import RegisterUserForm from "./pages/RegisterUserForm";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/register-user',
    element: <RegisterUserForm />
  }
];

export default AppRoutes;
