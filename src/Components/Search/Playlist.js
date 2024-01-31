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
      <div className={styles.xStack}>
        <h2>Playlist</h2>
        {/* Not finished with logic*/}
        {props.playlist.length > 0 && (
          <button
            className={styles.savePlaylist}
            onClick={props.createPlaylist}
          >
            Save
          </button>
        )}
      </div>
      <ul>{playlist}</ul>
    </div>
  );
}
