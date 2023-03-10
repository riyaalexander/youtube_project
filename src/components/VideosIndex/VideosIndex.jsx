import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {VideoPage} from "../../components";

import  {fetchVideos}  from "../../utils/fetch";

import "../../styles/VideosIndex.css"

const VideoList = ({ videos }) => {
const {id} = useParams();
const [videosList, setVideosList] = useState([]);

useEffect(() => {
  fetchVideos()
  .then((response) => {
    setVideosList(response)
  }).catch(console.error((error) => {
    console.error(error);
  })) 
},[id])



  return (
    <div>
      {!videosList ? (console.error("Loading error....")) : (<section className="videos-index-wrapper">
      <ul className="videos-index">
        <li>
         {videos.map((video) => <h3>{video.title}</h3>)}
          <Link to="/videos/:id" element={<VideoPage />}>
           
            </Link>
        </li>
      </ul>
    </section>)}
    
    </div>
  )
}

export default VideoList;












