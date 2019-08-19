import axios from "axios";

export const HTTP = axios.create({
  baseURL: "http://assas.net/api/public/",
  headers: {
    //"Authorization": "Bearer {token}",
    "Content-Type": "application/json"
  }
});
