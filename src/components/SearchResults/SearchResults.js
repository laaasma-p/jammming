import { Component } from "react";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

class SearchResults extends Component {
  render() {
    return (
      <div className="search-results">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults} />
      </div>
    );
  }
}

export default SearchResults;
