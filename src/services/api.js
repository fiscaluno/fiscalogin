import axios from "axios";

const api = axios.create({
  baseURL: "https://fiscaluno-mu.herokuapp.com/users",
  timeout: 5000,
  headers: {
    "X-Client-ID":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImNsaWVudCI6ImFueSJ9LCJpc3MiOiJtdSJ9.k7uGe0qbuwwxAp_UOVGVft4eAJwDc_FnaZg-pmwzUZ0"
  }
});

export default api;
