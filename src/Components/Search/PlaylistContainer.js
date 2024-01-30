import React, { useState } from "react";
import Playlist from "./Playlist";
import axios from "axios";

export default function PlaylistContainer(props) {
  const createPlaylist = async () => {
    console.log(props.userId);
    const endpoint =
      "https://api.spotify.com/v1/users/" + props.userId + "/playlists";
    console.log(endpoint);
    const { data } = await axios(endpoint, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + props.authToken,
        "Content-Type": "application/json",
      },
      //   // Try body not data?
      //   body: JSON.stringify({
      //     name: "playlist",
      //   }),
    });
    // TODO - delete
    console.log(data);
  };

  return (
    <Playlist
      playlist={props.playlist}
      removeFromPlaylist={props.removeFromPlaylist}
      createPlaylist={createPlaylist}
    />
  );
}
