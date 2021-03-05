import axios from "axios";
import { API_KEY } from "../../config";

export default axios.create({
  baseURL:
    "https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses",
  json: true,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:8000"
  }
});
