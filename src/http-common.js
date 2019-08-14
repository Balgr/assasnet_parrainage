import axios from "axios";

export const HTTP = axios.create({
  //baseURL: "http://api.assas.net/",
  baseURL: "http://vps717724.ovh.net/assasnet/api-platform/api/public/index.php/",
  headers: {
    Authorization: "Bearer {token}"
  }
});
