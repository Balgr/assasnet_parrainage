import axios from "axios";

const HTTP = axios.create({
  //baseURL: "http://api.assas.net/",
  baseURL: "http://vps717724.ovh.net:8080/",
  headers: {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json"
  }
});

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    // handle error
    if (error.response) {
      alert(error.response.data.message);
    }
  }
);

export default HTTP;
