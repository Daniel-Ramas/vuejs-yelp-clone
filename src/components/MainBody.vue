<template>
  <div class="container-fluid-edgeless">
    <div class="row main-body-container no-gutters">
      <div class="col-9 search-results-and-filter">
        <div class="filters-container row">
          <div class="filters-content col-md-auto">
            <app-filters-panel></app-filters-panel>
          </div>
          <div class="col search-result-container">
            <!-- Filter List Drop Down -->
            <div class="row no-gutters align-items-center">
              <div class="col-sm-auto">
                <p class="query-sub-heading" v-if="businesses.length != 0">
                  {{ renderSubHeading }}
                </p>

                <!-- End Filter List Drop Down -->
              </div>
              <div class="col filter-categories" style="textAlign: right;">
                <div class="select">
                  <label for="sort_by">Sort:</label>
                  <select
                    class="sort-by-drop-down"
                    name="sort_by"
                    id="sort_by"
                    v-model="sortList"
                  >
                    <option value="best_match">Recommended</option>
                    <option value="rating">Highest Rated</option>
                    <option value="review_count">Most Reviewed</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Search Results -->
            <div class="row">
              <div class="col list-search">
                <app-empty-search-card
                  v-if="loadingCard"
                  v-for="card in 5"
                ></app-empty-search-card>
                <div
                  class="search-result-wrap"
                  v-if="typeof businesses != 'undefined' || null"
                >
                  <!-- Blank place holder -->

                  <div
                    class="search-result-content-list"
                    v-for="biz in businesses"
                  >
                    <app-search-result-card
                      :info="biz"
                    ></app-search-result-card>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Search Results -->
            <div class="row" v-show="total != 0">
              <div class="col-6">
                <div class="row page-offset">
                  <div class="col-xs-auto">
                    <b-icon-caret-left
                      @click="pageBackward"
                    ></b-icon-caret-left>
                  </div>
                  <div class="col-xs-auto page-nums" v-for="pg in 9">
                    <li
                      v-if="pageCache == calcFirstPage + pg"
                      class="pg-num-focus"
                    >
                      {{ calcFirstPage + pg }}
                    </li>
                    <li v-else :value="calcFirstPage + pg" @click="jumpPages">
                      {{ calcFirstPage + pg }}
                    </li>
                  </div>
                  <div class="col-xs-auto">
                    <b-icon-caret-right
                      @click="pageForward"
                    ></b-icon-caret-right>
                  </div>
                </div>
              </div>
              <div class="col page-offset">
                {{ pageCache }} of {{ Math.ceil(total / 20) }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col google-map">
        <app-map-view></app-map-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { BIconCaretRight, BIconCaretLeft } from "bootstrap-vue";

import MapView from "./MapView.vue";
import SearchResultCard from "./SearchResultCard.vue";
import FiltersPanel from "./FiltersPanel";
import EmptySearchCard from "./templates/EmptySearchCard.vue";

export default {
  data() {
    return {
      pageCache: 1
    };
  },
  methods: {
    ...mapActions(["getBusinesses"]),
    ...mapMutations(["PAGE_FWD", "PAGE_BACK", "PAGE_JUMP"]),
    pageForward() {
      this.pageCache++;
      this.PAGE_FWD();
      this.getBusinesses();
    },
    pageBackward() {
      if (this.currentPage == 0) return null;
      else {
        this.pageCache--;
        this.PAGE_BACK();
        this.getBusinesses();
      }
    },
    jumpPages(event) {
      console.log(event.target.value);
      this.pageCache = event.target.value;
      this.PAGE_JUMP(event.target.value);
      this.getBusinesses();
    }
  },
  components: {
    appMapView: MapView,
    appSearchResultCard: SearchResultCard,
    appFiltersPanel: FiltersPanel,
    BIconCaretRight,
    BIconCaretLeft,
    appEmptySearchCard: EmptySearchCard
  },
  computed: {
    ...mapGetters([
      "businesses",
      "total",
      "currentPage",
      "searchInitiated",
      "sort_by",
      "searchQuery",
      "searchLocation",
      "loading"
    ]),
    sortList: {
      get() {
        return this.$store.state.searchQuery.sort_by;
      },
      set(value) {
        this.$store.commit("UPDATE_SORT_BY", value);
        this.getBusinesses();
      }
    },
    calcLastPage() {
      if (this.currentPage <= 5) {
        //Dont shift and keep list the same
        return 9;
      } else return currentPage + 4;
    },
    calcFirstPage() {
      if (this.currentPage <= 5) {
        //dont shift keep list the same
        return 0;
      } else return this.currentPage - 4;
    },
    renderSubHeading() {
      switch (this.sort_by) {
        case "best_match":
          return `Best ${this.searchQuery} in ${this.searchLocation}`;
          break;
        case "rating":
          return `Highest rated ${this.searchQuery} in ${this.searchLocation}`;
          break;
        case "review_count":
          return `Most reviewed ${this.searchQuery} in ${this.searchLocation}`;
          break;
        default:
          return "error";
          break;
      }
    },
    loadingCard() {
      return this.loading;
    }
  },
  beforeUpdate() {
    //was a new search query made?
    console.log("before update lifecycle method:" + this.pageCache);
    if (this.searchInitiated) this.pageCache = 1;
  }
};
</script>

<style>
.search-results-and-filter {
  border: 2px solid pink;
}

.filters-container {
  border: solid red 2px;
  margin-left: 10px;
}

.filters-content {
  top: 0;
  align-self: flex-start;
  bottom: auto;
  position: sticky;
  display: flex;
  flex-shrink: 0;
  z-index: 999;
  border: solid blue 2px;
  padding: 10px;
}
.google-map {
  top: 0;
  align-self: flex-start;
  bottom: auto;
  position: sticky;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-shrink: 0;
  z-index: 999;
  margin: 0;
  border: solid blue 2px;
}

.search-result-container {
  width: 100%;
  border: 2px solid green;
}

.map-container {
  top: 133px;
  height: calc(100vh-133px);
  margin-top: 36px;
  position: sticky;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  top: 0;
  bottom: auto;
}

.page-offset {
  text-align: right;
  border-top: 1px solid #808080;
  border-bottom: 1px solid #808080;
}

li {
  list-style-type: none;
  color: #808080;
  font-size: 16px;
}

li:hover {
  color: black;
  cursor: pointer;
}

.page-nums {
  margin: 3px;
}

.pg-num-focus {
  color: black;
  font-weight: bold;
}

.google-map {
  border: 2px solid green;
}

.list-search {
  padding-left: 20px;
  padding-right: 40px;
}

.query-sub-heading {
  font-size: 30px;
  font-weight: bold;
}

.sort-by-drop-down {
  border: transparent;
  font-weight: bold;
}

.sort-by-drop-down:hover {
  cursor: pointer;
  text-decoration: underline;
}

.sort-by-drop-down:focus {
  outline: none;
}

.filter-categories {
  font-size: 16px;
  padding: 10px 8px 10px 14px;
}
</style>
