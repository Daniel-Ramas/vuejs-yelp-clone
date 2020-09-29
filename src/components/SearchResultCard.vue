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
            <div class="col-xs-auto" v-for="stars in Math.floor(info.rating)">
              <b-icon-star-fill class="stars-style star-full"></b-icon-star-fill>
            </div>
            <div class="col-xs-auto" v-if="info.rating % 1 != 0">
              <b-icon-star-half class="stars-style half-star"></b-icon-star-half>
            </div>
            <div class="col-xs-auto" v-if="info.rating <= 4">
              <b-icon-star-fill v-for="stars in emptyStars" class="stars-style empty-star"></b-icon-star-fill>
            </div>
            <div class="col-xs-auto">{{ info.review_count }}</div>
          </div>
          <!-- Star Rating End -->
          <!-- Price and Category -->
          <div class="row align-items-center">
            <div class="col">
              <p style="color: #808080">{{ info.price }} • {{ info.categories[0].title }}</p>
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
      empty: 0,
    };
  },
  computed: {
    emptyStars() {
      return 5 - Math.ceil(this.info.rating);
    },
  },
  props: ["info"],
  components: {
    BIcon,
    BIconStarFill,
    BIconStarHalf,
  },
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
}

.empty-star {
  background-color: #808080;
}

.half-star {
  background: linear-gradient(to right, #b32323 50%, #808080 50%);
}
</style>
