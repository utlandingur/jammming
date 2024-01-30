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
      method: "POST",
      headers: {
        Authorization: "Bearer" + props.authToken,
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        name: "New Playlist",
      }),
    });
    // TODO - delete
    alert("created");
  };

  return (
    <Playlist
      playlist={props.playlist}
      removeFromPlaylist={props.removeFromPlaylist}
      createPlaylist={createPlaylist}
    />
  );
}
