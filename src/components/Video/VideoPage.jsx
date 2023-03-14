import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

function VideoPage() {
  const { id } = useParams();
  // const [video, setVideo] = useState(null);

  // useEffect(() => {
  //   async function fetchVideo() {
  //     const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet,player`);
  //     const data = await response.json();
  //     setVideo(data.items[0]);
  //   }

  //   fetchVideo();
  // }, [id]);

  // useEffect(() => {
  //   axios
  //     .get(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet`)
  //     .then((response) => {
  //       setVideo(response.data.items[0]);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [id]);

  // if (!video) {
  //   return <div>Loading...</div>;
  // }

  const onReady = (event) => {
    event.target.playVideo();
  };

  return (
    <div>
      <YouTube videoId={id} onReady={onReady} />
      {/* <h1>{video.snippet.title}</h1> */}
      {/* <iframe title={`YouTube video player for ${video.snippet.title}`} width="560" height="315" src={`https://www.youtube.com/embed/${video.id}`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
    </div>
  );
}

export default VideoPage;
