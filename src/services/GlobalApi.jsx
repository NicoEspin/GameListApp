import axios from "axios";

const API_KEY = "0efe590a274a488d87d39a9d5a0750a6";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get("/genres?key=" + API_KEY);
const getAllGames = axiosCreate.get("/games?key=" + API_KEY);
const getGameListByGenreId = (id) =>
  axiosCreate.get("/games?key=" + API_KEY + "&genres=" + id);

export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
};
