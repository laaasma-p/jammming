import { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input placeholder="Enter A Song, Album, or Artist" />
        <button>SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
