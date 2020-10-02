<template>
  <div class="menu">
    <div class="row one">
      <div class="col">
        <span>
          <b-icon-minecart-loaded></b-icon-minecart-loaded>
          Delivery
        </span>
      </div>
      <div class="col">Reservations</div>
    </div>
    <!--  -->
    <div class="row two">
      <div class="col">Burgers</div>
      <div class="col">Japanese</div>
    </div>
    <!--  -->
    <div class="row three">
      <div class="col">Chinese</div>
      <div class="col">Mexican</div>
    </div>
    <!--  -->
    <div class="row four">
      <div class="col">Italian</div>
      <div class="col">Thai</div>
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
