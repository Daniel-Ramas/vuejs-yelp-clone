<template>
  <div class="container">
    <div class="card-custom">
      <div class="row">
        <!-- Picture -->
        <div class="square fill col-4">
          <div class="blank-pic css-selector"></div>
        </div>
        <!-- Name, Rating Price -->
        <div class="col-4 empty-name">
          <div class="blank-title css-selector"></div>
          <!-- Star Rating -->
          <div class="blank-stars css-selector"></div>
        </div>
        <!-- Phone Number & Address -->
        <div class="right-info col-3 offset-1" style="textAlign: right">
          <div class="blank-address css-selector"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BIconStarFill } from "bootstrap-vue";
export default {
  components: {
    BIconStarFill
  }
};
</script>

<style scoped>
.css-selector {
  background: linear-gradient(273deg, #cccccc, #e6e6e6);
  background-size: 400% 400%;

  -webkit-animation: AnimationName 1.5s ease infinite;
  -moz-animation: AnimationName 1.5s ease infinite;
  animation: AnimationName 1.5s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 51%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 51%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 51%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.container {
  margin: 10px;
  border: 1px solid #cccccc;
  border-radius: 4px;
}

.card-custom {
  width: 100%;
  line-height: 0.75em !important;
  padding: 3px;
}

.empty-name {
  border-radius: 5px;
}

p {
  margin: 0;
}

.square {
  overflow: hidden;
  padding: 10px;
}

.blank-pic {
  width: 100%;
  height: 150px;
  border-radius: 5px;
  float: center;
  background-color: #ccc;
}

.blank-title {
  width: 200px;
  height: 2em;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  background-color: #ccc;
}

.blank-stars {
  width: 150px;
  height: 3em;
  border-radius: 5px;
  background-color: #ccc;
}

.blank-address {
  width: 100%;
  height: 3em;
  margin: 5px;
  border-radius: 5px;
  background-color: #ccc;
}
</style>
