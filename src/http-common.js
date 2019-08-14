import axios from "axios";

export const HTTP = axios.create({
  //baseURL: "http://api.assas.net/",
  baseURL: "http://api.assas.net/parrainage/",
  headers: {
    Authorization: "Bearer {token}"
  }
});
