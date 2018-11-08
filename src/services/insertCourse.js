import axios from "axios";

const insertCourses = axios.create({
  baseURL: "https://athena-bff.herokuapp.com/v1/courses",
  headers: {
      "Content-Type": "application/json"
  }
});

export default insertCourses;
