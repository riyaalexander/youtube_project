import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, Home, VideosIndex } from "./components";
import VideoPage from "/Users/shaniquacoston/Pursuit/youtube_project/src/components/Video/VideoPage.jsx";
import "./styles/App.css";

const App = () => {
  return (
    <div className="yt_clone">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<VideosIndex />} />
          <Route path="/videos/:id" element={<VideoPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
