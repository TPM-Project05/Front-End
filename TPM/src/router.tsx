import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import Example from "./pages/Example";

const routes: RouteObject[] = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/coba',
      element: <Example />,
    },
  ];
  
  const router = createBrowserRouter(routes);
  
  export default router;