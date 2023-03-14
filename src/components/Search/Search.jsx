import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchVideos } from "../../utils/fetch";

const Search = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  const handleTextChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchVideos(search)
      .then((data) => {
        navigate("/videos", { state: { data } });
        // setSearchResults(data);
      })
      .catch((error) => {
        console.log(error);
      });

    setSearch("");
  };

  return (
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <input type="text" id="search" value={search} onChange={handleTextChange} placeholder="Search" />
        <input type="submit" val="Search" />
      </form>
    </div>
  );
};

export default Search;
