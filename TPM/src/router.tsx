import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

const routes: RouteObject[] = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/Login',
      element: <Login />,
    },
  ];
  
  const router = createBrowserRouter(routes);
  
  export default router;