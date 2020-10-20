import SearchPage from "./pages/SearchPage.vue";
import HomePage from "./pages/HomePage.vue";
import { store } from "./vuex/store";

export const routes = [
  { path: "", component: HomePage },
  {
    path: "/search",
    name: "search",
    component: SearchPage,
  }
];
