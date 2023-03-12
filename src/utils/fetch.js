import axios from "axios";

const key = process.env.REACT_APP_YOUTUBE_API_KEY;
const url = "https://www.googleapis.com/youtube/v3/search";

// export const fetchVideos = async (query) => {
//   const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=${key}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   return data.items;
// };

export const fetchVideos = async (query) => {
  const params = {
    part: "snippet",
    maxResults: 1,
    q: query,
    key: key,
    fields: `items(id(videoId),snippet(title,description))`,
  };

  try {
    const response = await axios.get(url, { params });
    return response.data.items;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
