import axios from "axios";

const searchCourse = axios.create({
  baseURL: "https://athena-bff.herokuapp.com/v1/courses"
});

export default searchCourse;
