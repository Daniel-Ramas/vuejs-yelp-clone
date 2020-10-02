<template>
  <div class="menu">
    <div class="row one">
      <div class="col">
        <span>
          <b-icon-minecart-loaded></b-icon-minecart-loaded>
          Dry Cleaning
        </span>
      </div>
      <div class="col">Hair Salons</div>
    </div>
    <!--  -->
    <div class="row two">
      <div class="col">Phone Repair</div>
      <div class="col">Gyms</div>
    </div>
    <!--  -->
    <div class="row three">
      <div class="col">Bars</div>
      <div class="col">Massage</div>
    </div>
    <!--  -->
    <div class="row four">
      <div class="col">Night Life</div>
      <div class="col">Shopping</div>
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
}
.col:hover {
  background-color: #f5f5f5;
  border-radius: 5px;
}
.row {
  margin: 1px;
}
</style>
