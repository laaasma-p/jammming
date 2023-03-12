import { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <button className="search-button">SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
