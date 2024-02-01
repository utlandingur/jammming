import React, { useState } from "react";
import Playlist from "./Playlist";
import {
  createEmptyPlaylist,
  changeTracksInPlaylist,
} from "../../Util/Spotify";

export default function PlaylistContainer(props) {
  const { playlist, setPlaylist, authToken, userId, removeFromPlaylist } =
    props;

  const [playlistName, setPlaylistName] = useState("");

  const handleOnChange = ({ target }) => {
    setPlaylistName(target.value);
  };

  const createTrackUris = () => {
    const tmp = playlist;
    let trackUris = [];
    for (let track in tmp) {
      trackUris = [...trackUris, tmp[track].uri];
    }
    return trackUris;
  };

  const createPlaylist = async () => {
    if (!playlistName) {
      console.log("There must be a name for the playlist");
      return;
    }

    const trackUris = createTrackUris();

    if (!trackUris.length) {
      console.log("There must be tracks in the playlist");
      return;
    }

    const playlistId = await createEmptyPlaylist(
      userId,
      playlistName,
      authToken
    );
    await changeTracksInPlaylist(userId, authToken, playlistId, trackUris);
    setPlaylistName("");
    setPlaylist([]);
  };
  // const headers = { Authorization: `Bearer ${authToken}` };

  return (
    <Playlist
      playlist={playlist}
      removeFromPlaylist={removeFromPlaylist}
      handleOnChange={handleOnChange}
      playlistName={playlistName}
      createPlaylist={createPlaylist}
    />
  );
}
