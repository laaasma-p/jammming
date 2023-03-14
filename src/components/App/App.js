import "./App.css";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div>
          {/* SearchBar goes here */}
          <div className="app-playlist">
            {/* SearchResults go here */}
            {/* Playlist goes here */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
