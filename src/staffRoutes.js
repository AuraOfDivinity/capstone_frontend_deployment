// Staff Routes
import Templates_S from "views/Templates_S.js";
import Reports from "views/Reports";
import Documents_S from "views/Documents_S.js";
import UserProfile from "views/UserProfile.js";
import S_Subscriptions from "views/S_Subscriptions";

var staffRoutes = [
  {
    path: "/dashboard",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserProfile,
    layout: "/staff",
  },
  {
    path: "/templates",
    name: "My Templates",
    icon: "nc-icon nc-tile-56",
    component: Templates_S,
    layout: "/staff",
  },
  {
    path: "/documents",
    name: "My Documents",
    icon: "nc-icon nc-single-copy-04",
    component: Documents_S,
    layout: "/staff",
  },
  {
    path: "/reports",
    name: "My Reports",
    icon: "nc-icon nc-chart-bar-32",
    component: Reports,
    layout: "/staff",
  },
  {
    path: "/s_subscriptions",
    name: "My Subscriptions",
    icon: "nc-icon nc-paper",
    component: S_Subscriptions,
    layout: "/staff",
  },
];
export default staffRoutes;
