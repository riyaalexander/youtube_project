import axios from "axios";

const key = process.env.REACT_APP_YOUTUBE_API_KEY;
const url = "https://www.googleapis.com/youtube/v3/search";

export const fetchVideos = async (query) => {
  const params = {
    part: "snippet",
    maxResults: 1,
    q: query,
    key: key,
    fields: `items(id(videoId),snippet(title,description,thumbnails(medium)))`,
  };

  try {
    const response = await axios.get(url, { params });
    return response.data.items;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
