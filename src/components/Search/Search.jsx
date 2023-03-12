import { useState } from "react";
import YouTube from "react-youtube";
import { fetchVideos } from "../../utils/fetch";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleTextChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchVideos(search)
      .then((data) => {
        setSearchResults(data);
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
      <div className="search-results">
        {searchResults.length
          ? searchResults.map((result) => {
              return <YouTube videoId={result.id.videoId} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Search;
