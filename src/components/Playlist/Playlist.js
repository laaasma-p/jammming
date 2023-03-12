import { Component } from "react";
import "./Playlist.css";

class Playlist extends Component {
  render() {
    return (
      <div className="playlist">
        <input defaultValue={"New Playlist"} />
        {/* TrackList Component will be here */}
        <button className="playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
