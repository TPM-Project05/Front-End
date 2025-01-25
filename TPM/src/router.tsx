import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import HomeSementara from "./pages/HomeSementara";
import Example from "./pages/Example";
import { AuroraBackground } from "./components/ui/aurora-background";
import AuroraBack from "./pages/Aurora";
import UserDashboard from "./pages/UserDashboard";
import EditMember from "./pages/EditMember";
import TeamList from "./pages/TeamList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import InputTeam from "./pages/InputTeam";

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
      element: <TeamList/>.
    },
      path: '/Login', 
      element: <Login />, 
    },
    {
      path: '/Register',
      element: <Register />,
    },
    {
      path: '/inputteam',
      element: <InputTeam />,
    }
];
  
const router = createBrowserRouter(routes);
  
export default router;
