import axios from "axios";

export const api = axios.create({
  baseURL: 'https://go-donate-api.onrender.com/',
  timeout: 5000
})