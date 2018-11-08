
import axios from "axios";

const insertInstitution = axios.create({
  baseURL: "https://athena-bff.herokuapp.com/v1/institutions",
  headers: {
      "Content-Type": "application/json"
  }
});

export default insertInstitution;
