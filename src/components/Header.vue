<template>
  <div class="container-fluid header-container">
    <div class="row header-main">
      <div class="col-2">
        <!-- Logo -->
        <div class="row align-items-center">
          <div class="col-xs-auto logo yelp-logo">
            <i class="fa fa-yelp" aria-hidden="true"></i>
          </div>
          <div class="col-xs-auto logo">
            <h4>"YELP"</h4>
          </div>
        </div>
      </div>
      <div class="col-6 search-bar">
        <div class="input-group search-bar">
          <input
            type="text"
            aria-label="term"
            class="form-control"
            placeholder="tacos, cheap dinner, Max's"
            v-model="term"
          />
          <input
            type="text"
            aria-label="location"
            class="form-control"
            placeholder="address, neighborhood, city, state, or zip"
            v-model="location"
          />
          <div class="input-group-append">
            <button
              type="submit"
              class="btn btn-search"
              style="backgroundColor: #d32323"
              @click="onSearch"
            >
              <b-icon-search
                class="search-icon"
                font-scale="1.5"
              ></b-icon-search>
            </button>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="row side-links">
          <div class="col-4" style="textAlign: center">
            <p class="gray-square header-links">For Businesses</p>
          </div>
          <div class="col-4" style="textAlign: center">
            <p class="gray-square header-links">Write a Review</p>
          </div>
          <div class="col-4" style="textAlign: center">
            <div class="row">
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
      </div>
    </div>
    <div class="row">
      <div class="col-6 drop-downs offset-2">
        <div class="row">
          <div class="col align-self-center">
            Restuarants
            <b-icon-caret-down></b-icon-caret-down>
          </div>
          <div class="col">
            Home Services
            <b-icon-caret-down></b-icon-caret-down>
          </div>
          <div class="col">
            Auto Services
            <b-icon-caret-down></b-icon-caret-down>
          </div>
          <div class="col">
            More
            <b-icon-caret-down></b-icon-caret-down>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { BIconCaretDown, BIconSearch } from "bootstrap-vue";
export default {
  data() {
    return {
      searchBarInput: {
        query: "",
        location: ""
      }
    };
  },
  methods: {
    ...mapActions(["getBusinesses"]),
    ...mapMutations(["SEARCH_INITIATED"]),
    onSearch() {
      this.SEARCH_INITIATED(true);
      this.getBusinesses();
    }
  },
  computed: {
    term: {
      get() {
        return this.$store.state.searchQuery.term;
      },
      set(value) {
        this.$store.commit("UPDATE_TERM", value);
      }
    },
    location: {
      get() {
        return this.$store.state.searchQuery.location;
      },
      set(value) {
        this.$store.commit("UPDATE_LOCATION", value);
      }
    }
  },
  components: {
    BIconCaretDown,
    BIconSearch
  }
};
</script>

<style>
.drop-downs {
  font-size: 12px;
  background-color: transparent;
}

.input-group input {
  border-radius: 5px;
  height: 3em;
}

.header-container {
  padding: 20px;
}

.header-main {
  margin-bottom: 15px;
  align-items: center;
}

.search-bar {
  background-color: transparent;
}

.btn-search {
  color: white;
  background-color: #d32323;
}

.btn-search:hover {
  color: white;
}

.search-icon {
  height: 100%;
  width: 100%;
}

.logo {
  padding-left: 20px;
}

.yelp-logo {
  font-size: 40px;
  color: #d32323;
}

.header-links {
  font-size: 14px;
  padding: 10px;
}

.gray-square:hover {
  background-color: #e6e6e6;
  cursor: pointer;
  border-radius: 5px;
}

.gray-circle:hover {
  background-color: #e6e6e6;
  cursor: pointer;
  border-radius: 50%;
  padding: 10px;
}

.icon-padding {
  padding: 10px;
  margin: 5px;
}
</style>
