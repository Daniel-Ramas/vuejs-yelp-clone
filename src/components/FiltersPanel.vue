<template>
  <div class="row filter-button-group no-gutters">
    <div class="col">
      <p class="filter-title">Filters</p>
      <br />
      <div class="btn-group" role="group">
        <button
          type="button"
          value="1"
          class="btn btn-custom"
          :class="{ active: isActive1 }"
          @click="submitPrice"
        >
          $
        </button>
        <button
          type="button"
          value="2"
          class="btn btn-custom"
          :class="{ active: isActive2 }"
          @click="submitPrice"
        >
          $$
        </button>
        <button
          type="button"
          value="3"
          class="btn btn-custom"
          :class="{ active: isActive3 }"
          @click="submitPrice"
        >
          $$$
        </button>
        <button
          type="button"
          value="4"
          class="btn btn-custom"
          :class="{ active: isActive4 }"
          @click="submitPrice"
        >
          $$$$
        </button>
      </div>
      <br />
      <br />
      <hr />
      <p class="suggested-title">Suggested</p>
      <br />
      <input
        type="checkbox"
        name="open-now"
        id="open-now"
        v-model="open_now"
        @click="open_now_active = !open_now_active"
      />
      <label class="checkbox-label" for="open-now">
        Open Now
        <span v-if="open_now_active" style="color: #808080">{{
          getCurrentTime()
        }}</span>
      </label>
      <br />
      <!-- Hot and New Attrib -->
      <input
        type="checkbox"
        name="hot-and-new"
        id="hot-and-new"
        v-model="attributes"
        value="hot_and_new"
      />
      <label for="hot-and-new">Hot and New</label>
      <br />
      <hr />
      <p class="radius-title" style="fontWeight: bold">Distance</p>
      <input
        type="radio"
        name="birds-eye"
        id="birds-eye"
        value="null"
        v-model="radius"
        @change="submitRadius()"
      />
      <label for="birds-eye">Bird's Eye View</label>
      <br />
      <input
        type="radio"
        name="driving"
        id="driving"
        value="8046"
        v-model="radius"
        @change="submitRadius()"
      />
      <label for="driving">Driving (5 mi)</label>
      <br />
      <input
        type="radio"
        name="biking"
        id="biking"
        value="3219"
        v-model="radius"
        @change="submitRadius()"
      />
      <label for="biking">Biking (2 mi)</label>
      <br />
      <input
        type="radio"
        name="walking"
        id="walking"
        value="1609"
        @change="submitRadius()"
        v-model="radius"
      />
      <label for="walking">Walking (1 mi)</label>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      price: [],
      open_now_active: false,
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      radius: null
    };
  },
  methods: {
    ...mapActions(["getBusinesses"]),
    getCurrentTime() {
      var today = new Date();
      var hours = today.getHours();
      var mins = today.getMinutes();
      var ampm = hours >= 12 ? "pm" : "am";
      var time = `${hours}:${mins} ${ampm}`;
      return time;
    },
    submitPrice($event) {
      switch ($event.target.value) {
        case "1":
          this.isActive1 = !this.isActive1;
          break;
        case "2":
          this.isActive2 = !this.isActive2;
          break;
        case "3":
          this.isActive3 = !this.isActive3;
          break;
        case "4":
          this.isActive4 = !this.isActive4;
          break;
      }

      var i = this.price.indexOf($event.target.value);
      if (i == -1) this.price.push($event.target.value);
      else {
        this.price.splice(i, 1);
      }
      this.$store.commit("UPDATE_PRICE_ARRAY", this.price);
      this.getBusinesses();
    },
    submitRadius() {
      this.$store.commit("UPDATE_RADIUS", this.radius);
      this.getBusinesses();
    }
  },
  computed: {
    open_now: {
      get() {
        return this.$store.state.open_now;
      },
      set(value) {
        this.$store.commit("UPDATE_OPENNOW", value);
        //this will throw a bad request is input boxes are not populated
        this.getBusinesses();
      }
    },
    attributes: {
      get() {
        return this.$store.state.searchQuery.attributes;
      },
      set(value) {
        this.$store.commit("UPDATE_ATTRIBUTES", value);
        this.getBusinesses();
      }
    },
    nullVal() {
      return null;
    }
  }
};
</script>

<style scoped>
.btn-custom {
  background-color: transparent;
  border: 1px solid #333333;
  border-radius: 40%;
  color: #333333;
  font-size: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.btn-custom:hover {
  background-color: #cccccc;
}

.btn-custom:focus {
  background-color: #cccccc;
  outline-style: none;
  box-shadow: none;
}

.active {
  background-color: #cddae2;
  border: 1px solid #336a8b;
  color: #336a8b;
}

.filter-title {
  font-size: 16px;
  font-weight: bold;
}

.suggested-title {
  font-size: 14px;
  font-weight: bold;
}

.checkbox-label input {
  height: 40px;
}

label {
  cursor: pointer;
}
</style>
