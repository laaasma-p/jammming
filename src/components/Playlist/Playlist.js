import { Component } from "react";

class Playlist extends Component {
  render() {
    return (
      <div>
        <input defaultValue={"New Playlist"} />
        {/* TrackList Component will be here */}
        <button>SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
