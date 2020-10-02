<template>
  <div>
    <div class="row no-gutters">
      <div class="col">
        <app-header></app-header>
      </div>
    </div>

    <div class="row no-gutters">
      <div class="col" style="borderTop: 1px solid gray">
        <app-main-body></app-main-body>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MainBody from "./components/MainBody.vue";
export default {
  components: {
    appHeader: Header,
    appMainBody: MainBody
  }
};
</script>

<style>
.container-fluid {
  background-color: #f5f5f5 !important;
}
</style>
