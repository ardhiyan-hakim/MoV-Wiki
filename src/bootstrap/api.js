import axios from "axios";

function createInstance(timeout, access_token) {
  return axios.create({
    baseURL: "https://kawahedukasibackend.herokuapp.com",
    timeout,
    headers: {
      access_token,
    },
  });
}

export default createInstance;
