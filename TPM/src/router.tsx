import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import HomeSementara from "./pages/HomeSementara";
import Example from "./pages/Example";

const routes: RouteObject[] = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/coba',
      element: <HomeSementara />,
    },
    {
      path: '/coba1',
      element: <Example />,
    },
  ];
  
  const router = createBrowserRouter(routes);
  
  export default router;