<template>
  <div class="menu">
    <div class="row one">
      <div class="col">
        <span>
          <b-icon-minecart-loaded></b-icon-minecart-loaded>
          Contractors
        </span>
      </div>
      <div class="col">Landscaping</div>
    </div>
    <!--  -->
    <div class="row two">
      <div class="col">Electricians</div>
      <div class="col">Locksmiths</div>
    </div>
    <!--  -->
    <div class="row three">
      <div class="col">Home Cleaners</div>
      <div class="col">Movers</div>
    </div>
    <!--  -->
    <div class="row four">
      <div class="col">HVAC</div>
      <div class="col">Plumbers</div>
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
