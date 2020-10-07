import Vue from "vue";
import App from "./App.vue";
import { store } from "./vuex/store";
import VueGeolocation from "vue-browser-geolocation";
import * as VueGoogleMaps from "vue2-google-maps";
import VueRouter from "vue-router";
import { routes } from "./routes";

const API_KEY = config.GOOGLE_API_KEY;

Vue.filter("phoneNumber", function(value) {
  const sliceOne = value.slice(2, 5);
  const sliceTwo = value.slice(5, 8);
  const sliceThree = value.slice(8, 12);

  return `(${sliceOne}) ${sliceTwo}-${sliceThree}`;
});

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

Vue.use(VueGeolocation);
Vue.use(VueGoogleMaps, {
  load: {
    key: API_KEY
  }
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
