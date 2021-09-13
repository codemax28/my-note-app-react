import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3" />
      <input
        type="text"
        placeholder="Type to search"
        onChange={(event) => handleSearchNote(event.target.value)}
      />
    </div>
  );
};

export default Search;
