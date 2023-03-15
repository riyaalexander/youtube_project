import { Link, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { VideoPage } from "../../components";

import "../../styles/VideosIndex.css";

const VideoList = () => {
  const location = useLocation();
  const videosList = location.state.data;
  console.log(videosList);
  return (
    <div>
      {!videosList ? (
        console.error("Loading error....")
      ) : (
        <section className="videos-index-wrapper">
          <ul className="videos-index">
            {videosList.map((video) => (
              <li key={video.id.videoId}>
                <Link to={`/videos/${video.id.videoId}`}>
                  <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                  <h3>{video.snippet.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default VideoList;
