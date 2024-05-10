import axios, { AxiosResponse } from "axios";

const API_URL = "https://api.unsplash.com";
const ACCESS_KEY = "EfKVEm97Jq9NZQRYMD3GMdSbslYsOLCuN2UqThuSAbE";

axios.defaults.baseURL = API_URL;

interface SearchParams {
  client_id: string;
  page: number;
  per_page: number;
  query: string;
  orientation: string;
}

const searchParams: SearchParams = {
  client_id: ACCESS_KEY,
  page: 1,
  per_page: 12,
  query: "",
  orientation: "landscape",
};

export const fetchImages = async (
  query: string,
  page: number
): Promise<any> => {
  try {
    const res: AxiosResponse<any> = await axios.get("/search/photos", {
      params: {
        ...searchParams,
        page,
        query,
      },
    });
    return res.data;
  } catch (error) {}
};
