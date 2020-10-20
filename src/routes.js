import SearchPage from "./pages/SearchPage.vue";
import HomePage from "./pages/HomePage.vue";

export const routes = [
  { path: "", component: HomePage },
  {
    path: "/search",
    component: SearchPage
  }
];
