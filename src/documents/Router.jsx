import { createBrowserRouter } from "react-router-dom";
import SignUp2 from "./SignUp2";
import Loginpage2 from "./Loginpage2";
import Front from "./Front";
import Home from "./Home";
const router = createBrowserRouter([
  { path: "/", element: <Front /> },
  { path: "/signup", element: <SignUp2 /> },
  { path: "/login", element: <Loginpage2 /> },
  { path: "/home", element: <Home /> },
]);
export default router;
