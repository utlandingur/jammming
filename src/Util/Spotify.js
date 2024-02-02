import axios from "axios";

export const createEmptyPlaylist = async (userId, playlistName, authToken) => {
  const endpoint = "https://api.spotify.com/v1/users/" + userId + "/playlists";

  console.log(endpoint);

  try {
    const { data } = await axios.post(
      endpoint,
      {
        name: playlistName,
      },
      {
        headers: { Authorization: `Bearer ${authToken}` },
      }
    );
    return data.id;
  } catch (error) {
    console.log("Failed to create playlist");
    console.log(error);
  }
};

export const changeTracksInPlaylist = async (
  userId,
  authToken,
  playlistId,
  trackUris
) => {
  // Now we update the playlist with the selected tracks
  const endpoint = `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`;

  try {
    await axios.post(
      endpoint,
      {
        uris: trackUris,
      },
      {
        headers: { Authorization: `Bearer ${authToken}` },
      }
    );
    alert("Playlist successfully saved to your spotify account");
  } catch (error) {
    console.log("Failed to change tracks in playlist");
    console.log(error);
  }
};

export const getUserId = async (authToken) => {
  try {
    const endpoint = "https://api.spotify.com/v1/me";
    const { data } = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    const { id } = data;

    return id;
  } catch (error) {
    console.log("Error getting user ID");
  }
};
