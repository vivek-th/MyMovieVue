import { createRouter, createWebHistory } from 'vue-router';
import Index from '../components/Index.vue'; 
import Dashboard from "../components/Dashboard.vue";
import Login from '../components/Login.vue';    
import Register from '../components/Register.vue';
import Layout from '../components/Layout.vue';

// import child from '../components/child.vue';

const routes = [
  { path: '/', name: 'Index', component: Index },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  {path: "/layout", name: "Layout", component: Layout},
  // {path:"/child", name:"Child", component:child}
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
  