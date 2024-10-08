import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";
import GamePage from "views/admin/games";


// Icon Imports
import {
  MdHome,
  MdPerson,
  MdGamepad
} from "react-icons/md";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Games",
    layout: "/admin",
    path: "games",
    icon: <MdGamepad className="h-6 w-6" />,
    component: <GamePage />,
  }
];
export default routes;
