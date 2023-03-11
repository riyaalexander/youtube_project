import axios from "axios";

const key = process.env.REACT_APP_YOUTUBE_API_KEY;

export const fetchVideos = async (query) => {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=${key}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.items;
};
