import "./App.css";
import { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        { name: "Name1", artist: "Artist1", album: "Album1", id: 1 },
        { name: "Name2", artist: "Artist2", album: "Album2", id: 2 },
        { name: "Name3", artist: "Artist3", album: "Album3", id: 3 },
      ],
      playlistName: "New Playlist",
      playlistTracks: [
        {
          name: "PlaylistName1",
          artist: "PlaylistArtist1",
          album: "PlaylistAlbum1",
          id: 4,
        },
        {
          name: "PlaylistName2",
          artist: "PlaylistArtist2",
          album: "PlaylistAlbum2",
          id: 5,
        },
        {
          name: "PlaylistName3",
          artist: "PlaylistArtist3",
          album: "PlaylistAlbum3",
          id: 6,
        },
      ],
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);

    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => {
      return track.uri;
    });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="app">
          <SearchBar />
          <div className="app-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
