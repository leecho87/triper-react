import axios from "axios";

export const fetchApi = axios.create({
  baseURL: process.env.REACT_APP_TOUR_API_URL,
  withCredentials: true
});

