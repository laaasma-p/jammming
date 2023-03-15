import { Component } from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

class Playlist extends Component {
  render() {
    return (
      <div className="playlist">
        <input defaultValue={"New Playlist"} />
        <TrackList tracks={this.props.playlistTracks} />
        <button className="playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
