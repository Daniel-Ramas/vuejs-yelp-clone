<template>
  <div class="container custom-shadow-hover">
    <div class="card-custom">
      <div class="row">
        <!-- Picture -->
        <div class="square fill col-4">
          <img :src="info.image_url" />
        </div>
        <!-- Name, Rating Price -->
        <div class="col-4">
          <h5>{{ info.name }}</h5>
          <!-- Star Rating -->
          <div class="row align-items-center no-gutters">
            <div
              class="col-xs-auto"
              v-for="stars in Math.floor(info.rating)"
              :key="stars"
            >
              <b-icon-star-fill
                class="stars-style star-full"
                :class="starColor"
              ></b-icon-star-fill>
            </div>
            <div class="col-xs-auto" v-if="info.rating % 1 != 0">
              <b-icon-star-half
                class="stars-style half-star"
                :class="halfStarColor"
              ></b-icon-star-half>
            </div>
            <div class="col-xs-auto" v-if="info.rating <= 4">
              <b-icon-star-fill
                v-for="stars in emptyStars"
                :key="stars"
                class="stars-style empty-star"
              ></b-icon-star-fill>
            </div>
            <div class="col-xs-auto">{{ info.review_count }}</div>
          </div>
          <!-- Star Rating End -->
          <!-- Price and Category -->
          <div class="row align-items-center price-cat">
            <div class="col">
              <p style="color: #808080">
                {{ info.price }} • {{ info.categories[0].title }}
              </p>
            </div>
          </div>
        </div>
        <!-- Phone Number & Address -->
        <div class="right-info col-4" style="textAlign: right">
          <p v-if="info.phone">{{ info.phone | phoneNumber }}</p>
          <p>
            {{ info.location.address1 }}
            <br />
            {{ info.location.city }}, {{ info.location.state }}
            {{ info.location.zip_code }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BIcon, BIconStarFill, BIconStarHalf } from "bootstrap-vue";
export default {
  data() {
    return {
      empty: 0
    };
  },
  computed: {
    emptyStars() {
      return 5 - Math.ceil(this.info.rating);
    },
    starColor() {
      if (this.info.rating < 2) {
        return "yellow-star";
      } else if (this.info.rating <= 3) {
        return "orange-star";
      } else if (this.info.rating <= 4.5) {
        return "reg-red";
      }
    },
    halfStarColor() {
      if (this.info.rating < 2) {
        return "yellow-half-star";
      } else if (this.info.rating <= 3) {
        return "orange-half-star";
      } else if (this.info.rating <= 4.5) {
        return "reg-half-red";
      }
    }
  },
  props: ["info"],
  components: {
    BIcon,
    BIconStarFill,
    BIconStarHalf
  }
};
</script>

<style>
.container {
  margin: 10px;
  border: 1px solid #cccccc;
  border-radius: 4px;
}

.custom-shadow-hover:hover {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  transition: 0.3s;
}

.card-custom {
  width: 100%;
  line-height: 0.75em !important;
}

.stars-rating {
}

.star-half {
  margin: 0px;
}

p {
  margin: 0;
}

.square {
  overflow: hidden;
  justify-content: center;
  align-items: center;
}

.fill {
  height: 200px;
  width: 200px;
  display: flex;
  overflow: hidden;
  padding: 10px;
}

.fill img {
  max-width: 100%;
  max-height: 100%;
  flex-shrink: 0;
  border-radius: 4px;
}

.right-info {
  font-size: 12px;
  padding: 5px;
}

.stars-style {
  color: white;
  margin: 1px;
  padding: 2px;
}

.star-full {
  background-color: #b32323;
  border-radius: 3px;
}

.empty-star {
  background-color: #e6e6e6;
  border-radius: 3px;
}

.half-star {
  background: linear-gradient(to right, #b32323 50%, #e6e6e6 50%);
  border-radius: 3px;
}

.yellow-star {
  background-color: #fedd30 !important;
}

.orange-star {
  background-color: #ff9242 !important;
}

.reg-red {
  background-color: #f15c4f !important;
}

.yellow-half-star {
  background: linear-gradient(to right, #fedd30 50%, #e6e6e6 50%) !important;
}

.orange-half-star {
  background: linear-gradient(to right, #ff9242 50%, #e6e6e6 50%) !important;
}

.reg-half-red {
  background: linear-gradient(to right, #f15c4f 50%, #e6e6e6 50%) !important;
}

.price-cat {
  margin-top: 5px;
}
</style>
