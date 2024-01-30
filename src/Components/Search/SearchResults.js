import React from "react";
import styles from "./SearchResults.module.css";

export default function SearchResults(props) {
  const trackList = props.tracks.map((track, index) => {
    return (
      <div className={styles.searchResultsContainer} key={index}>
        <li index={index} className={styles.track}>
          <img
            className={styles.albumCover}
            alt="album cover"
            src={props.tracks[index].album.images[2].url}
          />
          <div className={styles.yStack}>
            <text className={styles.trackTitle}>{track.name}</text>
            <text className={styles.trackInfo}>{track.artists[0].name}</text>
          </div>
          <button className={styles.addButton} onClick={props.addToPlaylist}>
            +
          </button>
        </li>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <h2>Search Results</h2>
      <ul>{trackList}</ul>
    </div>
  );
}
