import axios from "axios";
import { FetchImagesResponse } from "../../types";

const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "quzD4HfM7ucZ6oxYuJ5_7oJ6xiz-qf9YsLyXN10BNOQ";

export const fetchImages = async (
  page: number,
  query: string
): Promise<FetchImagesResponse> => {
  const response = await axios.get<FetchImagesResponse>(API_URL, {
    params: {
      query,
      page,
      per_page: 12,
      orientation: "landscape",
    },
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
  });

  return response.data;
};
