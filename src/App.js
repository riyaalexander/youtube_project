import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, Home, VideoPage, VideosIndex } from "./components";

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
