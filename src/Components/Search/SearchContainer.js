import React, { useState } from "react";
import SearchbarContainer from "./SearchbarContainer";
import SearchResults from "./SearchResults";
import PlaylistContainer from "./PlaylistContainer";
import styles from "./SearchContainer.module.css";

export default function SearchContainer(props) {
  const { userId, authToken } = props;
  const [tracks, setTracks] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  // const [isButtonclicked, setIsButtonClicked] = useState(false);

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
      <SearchbarContainer authToken={authToken} updateTracks={setTracks} />
      <div className={styles.resultsAndPlaylistContainer}>
        <SearchResults tracks={tracks} addToPlaylist={addToPlaylist} />
        <PlaylistContainer
          playlist={playlist}
          removeFromPlaylist={removeFromPlaylist}
          userId={userId}
          authToken={authToken}
          setPlaylist={setPlaylist}
        />
      </div>
    </>
  );
}
