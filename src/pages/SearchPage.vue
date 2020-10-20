<template>
  <div>
    <div class="row no-gutters">
      <div class="col">
        <app-header></app-header>
      </div>
    </div>

    <div class="row no-gutters">
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

<style></style>
