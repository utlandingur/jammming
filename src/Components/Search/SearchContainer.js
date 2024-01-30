import React, { useState } from "react";
import SearchbarContainer from "./SearchbarContainer";
import SearchResults from "./SearchResults";

export default function SearchContainer(props) {
  const [tracks, setTracks] = useState([]);

  const updateTracks = (val) => {
    const tmp = val;
    setTracks(tmp);
  };

  // After clicking the add button the song is added to the playlist
  const addToPlaylist = (e) => {
    const trackId = e.target.parentNode.getAttribute("trackId");
    // placeholder for more code one playlist is built
    // will require a new state on app
  };

  return (
    <>
      <SearchbarContainer
        authToken={props.authToken}
        updateTracks={updateTracks}
      />
      <SearchResults
        tracks={tracks}
        updateTracks={updateTracks}
        addToPlaylist={addToPlaylist}
      />
    </>
  );
}
