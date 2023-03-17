import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, Home, VideoPage, VideosIndex, About, AboutV2 } from "./components";

import "./styles/App.css";

const App = () => {
  return (
    <div className="yt_clone bg-slate-400 min-h-screen">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<VideosIndex />} />
          <Route path="/videos/:id" element={<VideoPage />} />
          <Route path="/aboutV2" element={<AboutV2 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
