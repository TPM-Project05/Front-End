import { createBrowserRouter, redirect, RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import HomeSementara from "./pages/HomeSementara";
import Example from "./pages/Example";
import { AuroraBackground } from "./components/ui/aurora-background";
import AuroraBack from "./pages/Aurora";
import UserDashboard from "./pages/UserDashboard";
import EditMember from "./pages/EditMember";
import TeamList from "./pages/TeamList";
import Login from "./pages/Login";
import Register from "./pages/register";

const token = localStorage.getItem("access_token")

const authHome = () => {
  if (!token) {
      return redirect("/login")
  }
  return null
}

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
      element: <UserDashboard/>,
      loader: authHome
    },
    {
      path: '/edit',
      element: <EditMember/>
    },
    {
      path: '/teamList',
      element: <TeamList/>
    },
    {
      path: '/login', 
      element: <Login /> 
    },
    {
      path: '/register',
      element: <Register />
    },
];
  
const router = createBrowserRouter(routes);
  
export default router;
