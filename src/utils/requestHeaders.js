import axios from "axios";
import { API_URL } from "./URLhandler";

function requestHeaders(url) {
  let api = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    baseURL: `${API_URL}/${url}`,
  });
  return api;
}

export default requestHeaders;
