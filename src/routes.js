/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Templates from "views/Templates.js";
import Reports from "views/Reports";
import Documents from "views/Documents.js";
import UserProfile from "views/UserProfile.js";
import A_Subscriptions from "views/A_Subscriptions";
// import Plans from "views/Plans";

var routes = [
  {
    path: "/dashboard",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/templates",
    name: "My Templates",
    icon: "nc-icon nc-tile-56",
    component: Templates,
    layout: "/admin",
  },
  {
    path: "/documents",
    name: "My Documents",
    icon: "nc-icon nc-single-copy-04",
    component: Documents,
    layout: "/admin",
  },
  {
    path: "/reports",
    name: "My Reports",
    icon: "nc-icon nc-chart-bar-32",
    component: Reports,
    layout: "/admin",
  },
  {
    path: "/a_subscriptions",
    name: "My Subscriptions",
    icon: "nc-icon nc-paper",
    component: A_Subscriptions,
    layout: "/admin",
  },

];
export default routes;
