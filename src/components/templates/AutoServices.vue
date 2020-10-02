<template>
  <div class="menu">
    <div class="row one">
      <div class="col">
        <span>
          <b-icon-minecart-loaded></b-icon-minecart-loaded>
          Auto Repair
        </span>
      </div>
      <div class="col">Car Dealers</div>
    </div>
    <!--  -->
    <div class="row two">
      <div class="col">Auto Detailing</div>
      <div class="col">Oil Change</div>
    </div>
    <!--  -->
    <div class="row three">
      <div class="col">Body Shops</div>
      <div class="col">Parking</div>
    </div>
    <!--  -->
    <div class="row four">
      <div class="col">Car Wash</div>
      <div class="col">Towing</div>
    </div>
  </div>
</template>

<script>
import { BIconMinecartLoaded } from "bootstrap-vue";
export default {
  components: {
    BIconMinecartLoaded
  }
};
</script>

<style scoped>
.menu {
  max-width: 100%;
  padding: 5px;
}

.col {
  margin: 2px;
  font-size: 14px;
  height: 3em;
}
.col:hover {
  background-color: #f5f5f5;
  border-radius: 5px;
}
.row {
  margin: 1px;
}
</style>
