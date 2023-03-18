import { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div className="searchbar">
        <input placeholder="Enter A Song Title" />
        <button className="search-button" onClick={this.search}>
          SEARCH
        </button>
      </div>
    );
  }
}

export default SearchBar;
