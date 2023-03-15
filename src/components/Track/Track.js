import { Component } from "react";
import "./Track.css";

class Track extends Component {
  renderAction() {
    if (this.props.isRemoval) {
      return <button className="track-action">-</button>;
    }
    return <button className="track-action">+</button>;
  }

  render() {
    return (
      <div className="track">
        <div className="track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
