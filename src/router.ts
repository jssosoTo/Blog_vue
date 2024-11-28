import { createMemoryHistory, createRouter } from "vue-router";
import Home from "./pages/Home/Home.vue";
import Projects from "./pages/Projects/Projects.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/projects", component: Projects },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
