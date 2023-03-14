import { Component } from "react";
import "./TrackList.css";
import Track from "../Track/Track";

class TrackList extends Component {
  render() {
    return (
      <div className="tracklist">
        <Track />
        <Track />
        <Track />
      </div>
    );
  }
}

export default TrackList;
