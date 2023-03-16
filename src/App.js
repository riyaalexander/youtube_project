import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, Home, VideoPage, VideosIndex, About } from "./components";

import "./styles/App.css";

const App = () => {
  return (
    <div className="yt_clone bg-slate-600 min-h-screen">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<VideosIndex />} />
          <Route path="/videos/:id" element={<VideoPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
