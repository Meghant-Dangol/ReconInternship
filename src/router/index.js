import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "../components/login/LoginForm.vue";
import Dashboard from "../components/Dashboard.vue";
import Credit from "../components/Credit.vue";
import Debit from "../components/Debit.vue";
import Transactions from "../components/Transactions.vue";
import Transaction from "../components/Transaction.vue";
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
    component: Credit,
    name: "Credit",
  },
  {
    path: "/debit",
    component: Debit,
    name: "Debit",
  },
  {
    path: "/transactions",
    component: Transactions,
    name: "Transactions",
  },
  {
    path: "/transaction/:date",
    component: Transaction,
    name: "Transaction",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
