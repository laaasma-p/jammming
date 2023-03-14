import { Component } from "react";
import "./Track.css";

class Track extends Component {
  render() {
    return (
      <div class="track">
        <div class="track-information">
          <h3>Track name will go here</h3>
          <p>Track artist will go here | track album will go here</p>
        </div>
        <button class="track-action">+ or - will go here</button>
      </div>
    );
  }
}

export default Track;
