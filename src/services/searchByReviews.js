import axios from "axios";

const searchReview = axios.create({
  baseURL: "https://athena-bff.herokuapp.com/v1/reviews"
});

export default searchReview;
