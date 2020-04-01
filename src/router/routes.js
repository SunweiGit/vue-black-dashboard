import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// admin pages
const home = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/user/Profile.vue");
const Login = () => import(/* webpackChunkName: "common" */ "@/pages/user/Login.vue");
const Register = () => import(/* webpackChunkName: "common" */ "@/pages/user/Register.vue");


//template
const template_poetry = () => import(/* webpackChunkName: "common" */ "@/pages/templates/template_poetry.vue");


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: home
      },
      {
        path: "template_poetry",
        name: "template_poetry",
        component: template_poetry
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "login",
        name: "login",
        component: Login
      },
      {
        path: "register",
        name: "register",
        component: Register
      },
    ]
  },
  {path: "*", component: NotFound},
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
