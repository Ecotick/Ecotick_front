import React from "react";
import "./SearchBar.css";

function SearchBar({ searchValue, setSearchValue }) {
  // const [searchString, setSearchString] = useState("");
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="contener">
      <form
        role="search"
        method="get"
        className="search-form form"
        onSubmit={(event) => event.preventDefault()}
      >
        <label>
          <span className="screen-reader-text">Search for...</span>
          <input
            type="search"
            className="search-field"
            placeholder="Type something..."
            value={searchValue}
            onChange={handleChange}
          />
        </label>
        <input
          type="submit"
          className="search-submit button"
          defaultValue=""
        />
      </form>
    </div>
  );
}

export default SearchBar;
