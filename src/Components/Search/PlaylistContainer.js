import React, { useState } from "react";
import Playlist from "./Playlist";
import axios from "axios";

export default function PlaylistContainer(props) {
  const createPlaylist = async () => {
    console.log(props.userId);
    const endpoint =
      "https://api.spotify.com/v1/users/" + props.userId + "/playlists";
    console.log(endpoint);
    console.log("Bearer " + props.authToken);

    const { data } = await axios.post(endpoint, {
      body: JSON.stringify({
        name: "New Playlist",
        description: "New playlist description",
        public: false,
      }),
      headers: {
        Authorization: "Bearer " + props.authToken,
        "Content-Type": "application/json",
      },
    });
    console.log(typeof data);
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
