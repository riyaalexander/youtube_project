import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchVideos } from "../../utils/fetch";
// import "../../styles/Search.css";

const Search = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleTextChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchVideos(search)
      .then((data) => {
        navigate("/videos", { state: { data } });
      })
      .catch((error) => {
        console.log(error);
      });

    setSearch("");
  };

  return (
    <div className="flex justify-center items-start mt-12">
      <div className="search-bar w-full max-w-lg">
        <form onSubmit={handleSubmit} className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex">
          <input type="text" id="search" value={search} onChange={handleTextChange} placeholder="Search" className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight mr-2 focus:outline-none focus:shadow-outline" />
          <input type="submit" val="Search" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline" />
        </form>
      </div>
    </div>
  );
};

export default Search;
