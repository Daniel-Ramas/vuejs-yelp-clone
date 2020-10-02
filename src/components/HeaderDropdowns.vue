<template>
  <div class="dropdown">
    <button
      class="btn dropdown-toggle btn-custom"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {{ buttonName }}
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <app-restaurants v-if="buttonName == 'Restaurants'"></app-restaurants>
      <app-home-services
        v-if="buttonName == 'Home Services'"
      ></app-home-services>
      <app-auto-services
        v-if="buttonName == 'Auto Services'"
      ></app-auto-services>
      <app-more v-if="buttonName == 'More'"></app-more>
    </div>
  </div>
</template>

<script>
import Restaurants from "./templates/Restaurants";
import HomeServices from "./templates/HomeServices";
import AutoServices from "./templates/AutoServices";
import More from "./templates/More";
export default {
  data() {
    return {};
  },
  props: ["buttonName"],
  components: {
    appRestaurants: Restaurants,
    appHomeServices: HomeServices,
    appAutoServices: AutoServices,
    appMore: More
  }
};
</script>

<style>
.dropdown:hover .dropdown-menu {
  display: block;
  margin-top: 0;
  width: 300px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
}

.dropdown:hover .btn-custom {
  border-bottom: 3px solid #d32323;
  transition: 0s !important;
}

.dropdown:hover {
  cursor: pointer;
}

.dropdown {
  margin: 0;
  padding: 0;
}
.dropdown .btn-custom {
  background: transparent;
  padding-top: 0;
  font-size: 15px;
  height: 100%;
  text-align: left;
  margin-bottom: 0;
  border-radius: 0px !important;
  font-weight: 300;
  text-align: left;
}
</style>
