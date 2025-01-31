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
import InputTeam from "./pages/InputTeam";
import FetchData from "./pages/FetchData";
import AddMember from "./pages/AddMember";
import axiosInstance from "../src/config/instance";
import { LoginResponse } from "./interfaces/Types";

const token: string | null = localStorage.getItem("access_token");

// Auth middleware for home
const authHome = () => {
  if (!token) {
    return redirect("/login");
  } 
  return null;
};

const authLogin = () => {
  if (token) {
    return redirect("/dashboard");
  } 
  return null;
};

// Admin role middleware
const authAdmin = async (): Promise<Response | null> => {
  if (!token) {
    return redirect("/login");
  }

  try {
    const response = await axiosInstance.get<LoginResponse>("/user",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    const userRole = response.data.team.role;

    if (userRole !== "admin") {
      return redirect("/dashboard");
    }
  } catch (error) {
    console.error("Error verifying admin role:", error);
    return redirect("/login");
  }

  return null;
};

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/coba",
    element: <HomeSementara />,
  },
  {
    path: "/coba1",
    element: <Example />,
  },
  {
    path: "/aurora",
    element: <AuroraBack />,
  },
  {
    path: "/dashboard",
    element: <UserDashboard />,
  },
  {
    path: "/edit",
    element: <EditMember />,
  },
  {
    path: "/teamList",
    element: <TeamList />,
  },
  {
    path: "/login",
    element: <Login />,
    loader: authLogin
  },
  {
    path: "/register",
    element: <Register />,
    loader: authLogin

  },
  {
    path: "/inputteam",
    element: <InputTeam />,
  },
  {
    path: "/adminPanel",
    element: <TeamList />, // Admin panel page
    loader: authAdmin,
  },
  {
    path: "/add/member",
    element: <AddMember />,
  },
    {
      path: '/register',
      element: <Register />
    },
];

const router = createBrowserRouter(routes);

export default router;