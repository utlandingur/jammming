import React, { useState } from "react";
import SearchbarContainer from "./SearchbarContainer";
import SearchResults from "./SearchResults";
import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import PlaylistContainer from "./PlaylistContainer";

export default function SearchContainer(props) {
  const [tracks, setTracks] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  // const [isButtonclicked, setIsButtonClicked] = useState(false);

  const updateTracks = (val) => {
    const tmp = val;
    setTracks(tmp);
  };

  // After clicking the add button the song is added to top of playlist
  // and removed from tracks
  const addToPlaylist = (e) => {
    const trackIndex = e.target.parentNode.getAttribute("index");
    const selectedTrack = tracks[trackIndex];
    setPlaylist([selectedTrack, ...playlist]);
    setTracks(tracks.filter((track) => track !== tracks[trackIndex]));
  };

  const removeFromPlaylist = (e) => {
    const trackIndex = e.target.parentNode.getAttribute("index");
    setPlaylist(playlist.filter((track) => track !== playlist[trackIndex]));
  };

  return (
    <>
      <SearchbarContainer
        authToken={props.authToken}
        updateTracks={updateTracks}
      />
      <div
        style={{
          display: "flex",
          gap: "30px",
          width: "100%",
          justifyContent: "space-around",
          marginTop: "40px",
        }}
      >
        <SearchResults
          tracks={tracks}
          addToPlaylist={addToPlaylist}
          // isButtonclicked={isButtonclicked}
          // setIsButtonClicked={setIsButtonClicked}
        />
        <PlaylistContainer
          playlist={playlist}
          removeFromPlaylist={removeFromPlaylist}
          userId={props.userId}
          authToken={props.authToken}
        />
      </div>
    </>
  );
}
