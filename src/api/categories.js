import axios from "axios";
import { API_KEY } from "../../config";

export default axios.create({
  baseURL: "https://corsanywhere.herokuapp.com/https://api.yelp.com/v3",
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});
