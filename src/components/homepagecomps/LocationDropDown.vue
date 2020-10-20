<template>
  <div>
    <div
      class="suggested-term"
      v-for="loc in locations"
      @click="locationSelect(loc)"
      :class="currentLocRender(loc)"
    >
      {{ loc }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locations: ["Current Location", "Glendale, CA"],
    };
  },
  methods: {
    locationSelect(loc) {
      if (loc == "Current Location") {
        this.$emit("suggest", loc)
        this.$getLocation({})
          .then((coordinates) => {
            const coords = { lat: coordinates.lat, lng: coordinates.lng };
            this.$store.commit("UPDATE_LATITUDE_LONG", coords);
          })
          .catch((error) => alert(error));
      } else {
        this.$emit("suggest", loc);
      }
    },
    currentLocRender(loc) {
      if (loc == "Current Location") return "blue-text";
    },
  },
};
</script>

<style>
.suggested-term {
  padding: 10px;
  font-size: 14px;
}

.suggested-term:hover {
  background-color: #0097ec;
  color: white;
  cursor: pointer;
}

.blue-text {
  color: #0097ec;
}
</style>