import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import HomeSementara from "./pages/HomeSementara";
import Example from "./pages/Example";
import { AuroraBackground } from "./components/ui/aurora-background";
import AuroraBack from "./pages/Aurora";
import UserDashboard from "./pages/UserDashboard";
import EditMember from "./pages/EditMember";
import TeamList from "./pages/TeamList";

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
    {
      path: '/aurora',
      element: <AuroraBack/>
    },
    {
      path: '/dashboard',
      element: <UserDashboard/>
    },
    {
      path: '/edit',
      element: <EditMember/>
    },
    {
      path: '/teamList',
      element: <TeamList/>
    }
  ];
  
  const router = createBrowserRouter(routes);
  
  export default router;