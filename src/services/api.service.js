import axios from "axios";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_PUBLIC_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const ApiService = {
  async fetching(url) {
    const response = await axios.get(
      `https://youtube-v31.p.rapidapi.com/${url}`,
      options
    );
    return response.data;
  },
};
