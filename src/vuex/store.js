import Vue from "vue";
import Vuex from "vuex";

//api import
import yelp from "../api/yelp";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    results: [],
    coordinates: {
      lat: 0,
      lng: 0
    },
    markers: [],
    total: 0,
    currentPage: 0,
    searchInitiated: false,
    loading: false,
    searchQuery: {
      term: "",
      location: "",
      open_now: false,
      price: [],
      sort_by: "best_match",
      attributes: [],
      radius: null,
      latitude: 0,
      longitude: 0,
    }
  },
  getters: {
    businesses: state => {
      return state.results;
    },
    total: state => {
      return state.total;
    },
    currentPage: state => {
      return state.currentPage;
    },
    searchInitiated: state => {
      return state.searchInitiated;
    },
    coordinates: state => {
      return state.coordinates;
    },
    markers: state => {
      return state.markers;
    },
    sort_by: state => {
      return state.searchQuery.sort_by;
    },
    searchQuery: state => {
      return state.searchQuery.term;
    },
    searchLocation: state => {
      return state.searchQuery.location;
    },
    loading: state => {
      return state.loading;
    },
  },
  mutations: {
    ADD_RESULTS(state, payload) {
      state.results = payload;
    },
    ADD_TOTAL(state, payload) {
      state.total = payload;
    },
    PAGE_FWD(state) {
      state.currentPage++;
    },
    PAGE_BACK(state) {
      state.currentPage--;
    },
    PAGE_JUMP(state, payload) {
      state.currentPage = payload;
    },
    SET_QUERY(state, payload) {
      state.searchQuery.term = payload.query;
      state.searchQuery.location = payload.location;
    },
    CLEAR_RESULTS(state) {
      state.results = {};
    },
    UPDATE_TERM(state, payload) {
      state.searchQuery.term = payload;
    },
    UPDATE_LOCATION(state, payload) {
      state.searchQuery.location = payload;
    },
    UPDATE_OPENNOW(state, payload) {
      state.searchQuery.open_now = payload;
    },
    UPDATE_PRICE_ARRAY(state, payload) {
      state.searchQuery.price = payload;
    },
    UPDATE_SORT_BY(state, payload) {
      state.searchQuery.sort_by = payload;
    },
    SEARCH_INITIATED(state, payload) {
      state.searchInitiated = payload;
    },
    SET_COORDS(state, payload) {
      state.coordinates = payload;
    },
    ADD_MARKERS(state) {
      state.results.map(place => {
        state.markers.push({
          position: {
            lat: place.coordinates.latitude,
            lng: place.coordinates.longitude
          }
        });
      });
    },
    CLEAR_MARKERS(state) {
      state.markers = [];
    },
    UPDATE_ATTRIBUTES(state, payload) {
      state.searchQuery.attributes = payload;
    },
    LOAD_SPINNER(state, payload) {
      state.loading = payload;
    },
    UPDATE_RADIUS(state, payload) {
      state.searchQuery.radius = payload;
    },
    UPDATE_LATITUDE_LONG(state, payload) {
      state.searchQuery.latitude = payload.lat;
      state.searchQuery.longitude = payload.lng;
    },
  },
  actions: {
    getBusinesses({ commit, state }) {
      commit("CLEAR_RESULTS");
      commit("CLEAR_MARKERS");
      commit("LOAD_SPINNER", true);
      yelp
        .get("/search", {
          params: {
            term: state.searchQuery.term,
            ...(state.searchQuery.location != "Current Location" && {location: state.searchQuery.location}),
            ...(state.searchQuery.location == "Current Location" && {latitude: state.searchQuery.latitude,
              longitude: state.searchQuery.longitude}),
            open_now: state.searchQuery.open_now,
            price:
              state.searchQuery.price.length == 0
                ? "1, 2, 3"
                : state.searchQuery.price.join(", "),
            sort_by: state.searchQuery.sort_by,
            offset: state.currentPage * 20,
            atrributes:
              state.searchQuery.attributes.length == 0
                ? ""
                : state.searchQuery.attributes.join(","),
            radius:
              state.searchQuery.radius == "null" ? "" : state.searchQuery.radius
          }
        })
        .then(response => {
          //console.log(response.data);
          commit("PAGE_JUMP", 0);
          commit("ADD_RESULTS", Object.values(response.data.businesses));
          commit("ADD_TOTAL", response.data.total);
          commit("SEARCH_INITIATED", false);

          //handling API response for coordinates
          const coordinates = {
            lat: response.data.region.center.latitude,
            lng: response.data.region.center.longitude
          };
          commit("SET_COORDS", coordinates);
          commit("ADD_MARKERS");
        })
        .catch(error => alert(error))
        .finally(() => commit("LOAD_SPINNER", false));

      //push all coordinates from api call to array
    },
    init({dispatch}){
      dispatch('getBusinesses');
    }
  }
});
