import axios from "axios";

const API_URL = "https://api.unsplash.com";
const ACCESS_KEY = "EfKVEm97Jq9NZQRYMD3GMdSbslYsOLCuN2UqThuSAbE";

axios.defaults.baseURL = API_URL;

const searchParms = {
  client_id: ACCESS_KEY,
  page: 1,
  per_page: 12,
  query: "",
  orientation: "landscape",
};

export const fetchImages = async (query, page) => {
  const res = await axios.get("/search/photos", {
    params: {
      ...searchParms,
      page,
      query,
    },
  });
  return res.data;
};
