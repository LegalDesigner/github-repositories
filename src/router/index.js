import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/my-home.vue";
import Repositories from "../views/my-repositories.vue";
import Repository from "../views/my-repository.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/repositories",
    name: "Repositories",
    component: Repositories
  },
  {
    path: "/repositories/:repoName",
    name: "Repository",
    component: Repository
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
