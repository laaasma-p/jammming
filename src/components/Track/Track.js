import { Component } from "react";
import "./Track.css";

class Track extends Component {
  renderAction(isRemoval) {
    if (isRemoval) {
      return <button className="track-action">-</button>;
    }
    return <button className="track-action">+</button>;
  }

  render() {
    return (
      <div className="track">
        <div className="track-information">
          <h3>Track name will go here</h3>
          <p>Track artist will go here | track album will go here</p>
        </div>
        <button className="track-action">+ or - will go here</button>
      </div>
    );
  }
}

export default Track;
