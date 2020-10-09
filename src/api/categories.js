import axios from "axios";
const API_KEY = config.API_KEY;

export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3",
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});
