import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "../components/login/LoginForm.vue";
import Dashboard from "../components/Dashboard.vue";
const routes = [
  {
    path: "/",
    component: LoginForm,
    name: "Login",
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "Dashboard",
  },
  {
    path: "/credit",
    component: Dashboard,
    name: "Credit",
  },
  {
    path: "/debit",
    component: Dashboard,
    name: "Debit",
  },
  {
    path: "/transaction",
    component: Dashboard,
    name: "Transaction",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
