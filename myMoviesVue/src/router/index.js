import { createRouter, createWebHistory } from 'vue-router';
import Index from '../components/Index.vue'; 
import Dashboard from "../components/Dashboard.vue";
import Login from '../components/Login.vue';    
import Register from '../components/Register.vue';

const routes = [
  { path: '/', name: 'Index', component: Index },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
  