<template>
  <div>
    <div class="row background-img">
      <div class="offset-2 col-8 box">
        <div class="row">
          <div class="col-1 links">
            Review
          </div>
          <div class="col-1 links">
            Events
          </div>
          <div class="col-1 links">
            Talk
          </div>
          <div class="offset-6 col-3 header-right">
            ICONS
          </div>
        </div>
        <div class="row align-items-center search-frame">
          <div class="col search-section">
            <div class="input-group search-bar">
              <input
                type="text"
                aria-label="term"
                class="form-control"
                placeholder="Find plumbers, delivery, takeout..."
              />
              <input
                type="text"
                aria-label="location"
                class="form-control"
                placeholder="address, neighborhood, city, state, or zip"
              />
              <div class="input-group-append">
                <button type="submit" class="btn btn-search" @click="onSub()">
                  <b-icon-search></b-icon-search>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BIconSearch } from "bootstrap-vue";
export default {
  data() {
    return {
      test: ""
    };
  },
  methods: {
    onSub() {
      this.$router.push({ path: "search" });
    }
  },
  components: {
    BIconSearch
  }
};
</script>

<style>
.background-img {
  height: 100vh;
  position: relative;
}
.background-img::before {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-image: url("../../assets/charles-deluvio-D-vDQMTfAAU-unsplash.jpg");
  background-size: 100%;
  background-position: 0% 33%;
  content: "";
  filter: contrast(85%);
  opacity: 0.9;
  z-index: -1;
}

.box {
  position: relative;
  border: 2px solid red;
  padding-top: 1.5em;
}

.header-right {
  text-align: right;
}

.search-frame {
  height: 550px;
  text-align: center;
  border: 2px solid black;
}

.btn-search {
  color: white;
  background-color: #d32323;
  width: 50px;
}

.btn-search:hover {
  color: white;
}

.links {
  font-weight: bold;
  color: white;
}
</style>
