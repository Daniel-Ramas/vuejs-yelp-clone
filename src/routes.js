import SearchPage from "./pages/SearchPage.vue";
import HomePage from "./pages/HomePage.vue";

const example = {
  template: "<div>Home</div>"
};
export const routes = [
  { path: "", component: HomePage },
  { path: "/search", component: SearchPage }
];
