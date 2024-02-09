import React, { useState } from "react";

const GifSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="searchTerm">Search Giphy</label>
        <input
          type="text"
          className="form-control"
          id="searchTerm"
          placeholder="Search Giphy"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-default">
        Submit
      </button>
    </form>
  );
};

export default GifSearch;