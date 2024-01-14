import axios from "axios";

const apiClient = axios.create({
  baseURL: 'https://my.api.mockaroo.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  get (url) {
    return apiClient.get(url);
  }
}