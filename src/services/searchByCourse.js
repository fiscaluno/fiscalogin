import axios from "axios";

const searchCourse = axios.create({
  baseURL: "https://private-f15175-fiscalunoapi.apiary-mock.com/courses/",
  timeout: 5000,
  headers: {
    "X-Client-ID":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImNsaWVudCI6ImFueSJ9LCJpc3MiOiJtdSJ9.k7uGe0qbuwwxAp_UOVGVft4eAJwDc_FnaZg-pmwzUZ0",
    "X-User-Token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo2MCwiY3JlYXRlZEF0IjoiMjAxOC0wOC0wMlQxNjozMzoxMS4xNDQ2NDdaIiwidXBkYXRlZEF0IjoiMjAxOC0wOC0wMlQxNjozMzoxMS4xNDQ2NDdaIiwiZGVsZXRlZEF0IjpudWxsLCJmYWNlYm9va0lEIjoiMTIzNDEyMzQifSwiZXhwIjoxNTMzMzE0NzE5LCJpc3MiOiJtdSJ9.on2uZ0WIpdlAitBrGzISZ4tWoSRD5__Vswgl84Yaql8",
    "Accept":
      "application/json"
  }
});

export default searchCourse;
