import axios from "axios";

export const api = axios.create({
  baseURL: "https://go-donate-api.onrender.com/",
  timeout: 5000,
});

export const dev = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 5000,
});
