import axios from "axios";

const searchInstitution = axios.create({
  baseURL: "https://athena-bff.herokuapp.com/v1/institutions"
});

export default searchInstitution;
