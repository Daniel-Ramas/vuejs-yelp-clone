<template>
  <GmapMap
    :center="{ lat: coordinates.lat, lng: coordinates.lng }"
    :zoom="12"
    ref="mapRef"
    map-type-id="terrain"
    style="width: 100%; height: 720px;"
  >
    <!--<GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
    ></GmapMarker>  -->

    <gmap-custom-marker
      v-for="(m, index) in markers"
      :key="index"
      :marker="m.position"
    >
      <span class="fa-stack fa-lg">
        <i
          class="fa-shadow fa fa-map-marker fa-stack-1x"
          aria-hidden="true"
        ></i>
        <i
          class="fa-map-style fa fa-map-marker fa-stack-1x"
          aria-hidden="true"
        ></i>
        <i class="fa-filler-circle fa fa-circle fa-stack-1x"></i>
        <strong class="icon-number fa-stack-1x">
          {{ index }}
        </strong>
      </span>
    </gmap-custom-marker>
  </GmapMap>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import { gmapApi } from "vue2-google-maps";
import GmapCustomMarker from "vue2-gmap-custom-marker";
import { BIconGeoAltFill, BIconstack } from "bootstrap-vue";

export default {
  methods: {
    ...mapMutations(["SET_COORDS"])
  },
  computed: {
    ...mapGetters(["coordinates", "markers"]),
    google: gmapApi
  },
  beforeCreate() {
    this.$getLocation({})
      .then(coordinates => {
        const coords = { lat: coordinates.lat, lng: coordinates.lng };
        this.SET_COORDS(coords);
      })
      .catch(error => alert(error));
  },
  updated() {
    var bounds = new this.google.maps.LatLngBounds();
    for (var i = 0; i < this.markers.length; i++) {
      bounds.extend(this.markers[i].position);
    }
    this.$refs.mapRef.$mapPromise.then(map => {
      map.fitBounds(bounds);
    });
  },
  components: {
    BIconGeoAltFill,
    BIconstack,
    "gmap-custom-marker": GmapCustomMarker
  }
};
</script>

<style scoped>
.outer-map {
  height: 100%;
}

.custom-marker-style {
  color: red;
  height: 30px;
  width: 30px;
  border: 2px solid #f5f5f5;
  border-radius: 20px;
  background-color: #f5f5f5;
}

.fa-map-style {
  color: #d32323;
  font-size: 40px;
  text-shadow: -2px 0 #f5f5f5, 0 2px #f5f5f5, 2px 0 #f5f5f5, 0 -2px#f5f5f5;
}

.fa-shadow {
  text-shadow: 3px 3px 10px #272634;
  font-size: 40px;
}

.fa-filler-circle {
  color: #d32323;
  position: relative;
  top: -7px;
}

.icon-number {
  color: #f5f5f5;
  background-color: transparent;
  top: -5px;
  font-size: 75%;
}
</style>
