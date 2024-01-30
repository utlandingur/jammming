import React from "react";
import styles from "./Playlist.module.css";

export default function Playlist(props) {
  const playlist = props.playlist.map((track, index) => {
    return (
      <div className={styles.playlistContainer} key={index}>
        <li index={index} className={styles.track}>
          <img
            className={styles.albumCover}
            alt="album cover"
            src={props.playlist[index].album.images[2].url}
          />
          <div className={styles.yStack}>
            <text className={styles.trackTitle}>{track.name}</text>
            <text className={styles.trackInfo}>{track.artists[0].name}</text>
          </div>
          <button
            className={styles.removeButton}
            onClick={props.removeFromPlaylist}
          >
            x
          </button>
        </li>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <div>
        <h2>Playlist</h2>
        {/* Not finished */}
        <button onClick={props.createPlaylist}>Save playlist</button>
      </div>
      <ul>{playlist}</ul>
    </div>
  );
}
