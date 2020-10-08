<template>
  <div>
    <div class="row background-img">
      <div class="offset-2 col-8 box">
        <div class="row align-items-center top">
          <div class="col-xs-auto links">
            Write a Review
          </div>
          <div class="col-xs-auto links">
            Events
          </div>
          <div class="col-xs-auto links">
            Talk
          </div>
          <div class="col">
            <div class="row justify-content-end">
              <div class="col-xs-auto">
                <i
                  class="fa fa-commenting-o gray-circle icon-padding"
                  aria-hidden="true"
                ></i>
              </div>
              <div class="col-xs-auto">
                <i
                  class="fa fa-bell-o gray-circle icon-padding"
                  aria-hidden="true"
                ></i>
              </div>
              <div class="col-xs-auto">
                <i
                  class="fa fa-user-circle gray-circle icon-padding"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="row align-items-end logo">
          <div class="col">
            <h2>"YELP"</h2>
          </div>
        </div>
        <div class="row align-items-center search-frame">
          <div class="col search-section">
            <div class="input-group search-bar">
              <div class="input-group-prepend">
                <span class="input-group-text find-search-bar" id="basic-addon1"
                  >Find</span
                >
              </div>
              <input
                type="text"
                aria-label="term"
                class="form-control term-input"
                placeholder="plumbers, delivery, takeout..."
                list="term-list"
              />
              <div class="term-dropdown-menu">Hello</div>
              <span class="input-group-text near-search-bar">Near</span>
              <input
                type="text"
                aria-label="location"
                class="form-control location-input"
                placeholder="address, neighborhood, city, state, or zip"
              />
              <div class="input-group-append">
                <button type="submit" class="btn btn-search" @click="onSub()">
                  <b-icon-search></b-icon-search>
                </button>
              </div>
            </div>
            <div class="row justify-content-center bottom-links">
              <div class="col-sm-auto link-margins">
                <div class="row">
                  <div class="col-xs-auto icon-link-margins">
                    <b-icon-wrench></b-icon-wrench>
                  </div>
                  <div class="col-xs-auto">
                    <p class="search-bar-link">
                      Plumbers
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-auto link-margins">
                <div class="row">
                  <div class="col-xs-auto icon-link-margins">
                    <i class="fa fa-cutlery"></i>
                  </div>
                  <div class="col-xs-auto">
                    <p class="search-bar-link">
                      Restaurants
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-auto link-margins">
                <div class="row">
                  <div class="col-xs-auto icon-link-margins">
                    <b-icon-house-door-fill></b-icon-house-door-fill>
                  </div>
                  <div class="col-xs-auto">
                    <p class="search-bar-link">
                      Home Services
                    </p>
                  </div>
                  <div class="col-xs-auto icon-link-margins">
                    <b-icon-caret-down-fill></b-icon-caret-down-fill>
                  </div>
                </div>
              </div>
              <div class="col-sm-auto link-margins">
                <div class="row">
                  <div class="col-xs-auto icon-link-margins">
                    <i class="fa fa-bicycle"></i>
                  </div>
                  <div class="col-xs-auto">
                    <p class="search-bar-link">
                      Delivery
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-auto link-margins">
                <div class="row">
                  <div class="col-xs-auto icon-link-margins">
                    <p class="search-bar-link">
                      Black Owned
                    </p>
                  </div>
                  <div class="col-xs-auto">
                    <b-icon-caret-down-fill></b-icon-caret-down-fill>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row align-items-end bottom-main">
          <div class="col credits">
            A Clone By Daniel Ramas
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BIconSearch,
  BIconCaretDownFill,
  BIconWrench,
  BIconHouseDoorFill
} from "bootstrap-vue";
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
    BIconSearch,
    BIconCaretDownFill,
    BIconWrench,
    BIconHouseDoorFill
  }
};
</script>

<style scoped>
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
  background-attachment: fixed;
  content: "";
  filter: contrast(85%) saturate(90%) brightness(85%);
  opacity: 0.9;
  z-index: -1;
}

.box {
  position: relative;
  height: 100vh;
}

.header-right {
  text-align: right;
}

.search-frame {
  text-align: center;
  height: 15vh;
}

.btn-search {
  color: white;
  background-color: #d32323;
  width: 50px;
}

.term-dropdown-menu {
  position: absolute;
  display: none;
  top: 50px;
  width: 47%;
  z-index: 999;
}

.term-input:focus + .term-dropdown-menu {
  background-color: white;
  display: block;
}

.term-input:focus > .search-bar {
  border-bottom-left-radius: 0%;
}

.links {
  font-weight: bold;
  color: white;
  margin-right: 20px;
  font-size: 14px;
  margin-left: 10px;
  border-bottom: 2px solid transparent;
}

h2 {
  font-weight: 800;
  color: white;
}

.top {
  height: 15vh;
  min-height: 50px;
  max-height: 150px;
}
.logo {
  height: 30vh;
  text-align: center;
}

.bottom-main {
  height: 40vh;
  text-align: center;
}

.bottom-links {
  font-size: 14px;
  font-weight: bold;
  color: white;
  padding-top: 5px;
}

.form-control {
  color: #999999;
  min-height: 3em;
}

.credits {
  color: white;
  font-size: 12px;
  font-weight: 300px;
  padding-bottom: 15px;
}

.links:hover {
  border-bottom: 2px solid white;
  cursor: pointer;
}

.search-bar-link {
  border-bottom: 2px solid transparent;
}
.search-bar-link:hover {
  border-bottom: 2px solid white;
  cursor: pointer;
}

.gray-circle {
  color: white;
  font-size: 18px;
}
.icon-padding {
  padding: 10px;
  margin: 5px;
}
.gray-circle:hover {
  background-color: #999999;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
}

.link-margins {
  margin-right: 5px;
  margin-left: 5px;
}

.icon-link-margins {
  margin-right: 3px;
  margin-left: 3px;
}

.find-search-bar {
  background-color: white;
  color: #666666;
  font-weight: bold;
  border: none;
}

.term-input {
  padding-left: 0px;

  border: none;
}

.term-input:focus {
  outline-style: none;
  box-shadow: none;
  border-color: transparent;
}

.location-input {
  border-left: transparent;
  padding-left: 0px;
  border: none;
}

.location-input:focus {
  outline-style: none;
  box-shadow: none;
  border-color: transparent;
}

.near-search-bar {
  background-color: white;
  border-radius: 0px;
  color: #666666;
  font-weight: bold;
  border: none;
  border-left: 1px solid #e6e6e6 !important;
}

input:focus {
  outline: none;
}
</style>
