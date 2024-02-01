import React from "react";
import styles from "./Playlist.module.css";

export default function Playlist(props) {
  const {
    playlist,
    removeFromPlaylist,
    handleOnChange,
    playlistName,
    createPlaylist,
  } = props;

  const displayPlaylist = playlist.map((track, index) => {
    return (
      <div className={styles.playlistContainer} key={index}>
        <li index={index} className={styles.track}>
          <img
            className={styles.albumCover}
            alt="album cover"
            src={playlist[index].album.images[2].url}
          />
          <div className={styles.yStack}>
            <text className={styles.trackTitle}>{track.name}</text>
            <text className={styles.trackInfo}>{track.artists[0].name}</text>
          </div>
          <button className={styles.removeButton} onClick={removeFromPlaylist}>
            x
          </button>
        </li>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <h2>Playlist</h2>
      <div className={styles.xStack}>
        {/* Not finished with logic*/}
        {playlist.length > 0 && (
          <>
            <input
              type="text"
              value={playlistName}
              name="playlistName"
              onChange={handleOnChange}
              className={styles.input}
            />
            <p></p>
            <button className={styles.createButton} onClick={createPlaylist}>
              Create
            </button>
          </>
        )}
      </div>
      <ul>{displayPlaylist}</ul>
    </div>
  );
}
