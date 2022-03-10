import React from "react";
import "./SearchBox.scss";

const SearchBox = ({ value, onSearch }) => {
  return (
    <>
      {" "}
      <div className="searchbox-container">
        <input
          value={value}
          onChange={onSearch}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </>
  );
};

export default SearchBox;
