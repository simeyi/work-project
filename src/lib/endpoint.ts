import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const endpoint = {
  get: (url: string, params = {}) => {
    return instance.get(url, { params });
  },
};

export default endpoint;
