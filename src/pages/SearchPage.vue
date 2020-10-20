<template>
  <div>
    <div class="row no-gutters">
      <div class="col">
        <app-header></app-header>
      </div>
    </div>
    <div class="row no-gutters horizontal-div">
      <div class="col" style="bordertop: 1px solid gray">
        <app-main-body></app-main-body>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import MainBody from "../components/MainBody";
import { store } from "../vuex/store.js";

export default {
  components: {
    appHeader: Header,
    appMainBody: MainBody,
  },

};
</script>

<style>
.horizontal-div {
  border-top: 1px solid #e6e6e6;
}
</style>
