import { Component } from "react";
import "./Track.css";

class Track extends Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(event) {
    this.props.onAdd(this.props.track);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return <button className="track-action">-</button>;
    }
    return (
      <button className="track-action" onClick={this.addTrack}>
        +
      </button>
    );
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
