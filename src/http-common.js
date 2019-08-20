import axios from "axios";

const HTTP = axios.create({
  baseURL: "http://assas.net/api/public/",
  headers: {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json"
  }
});

HTTP.interceptors.response.use(
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
