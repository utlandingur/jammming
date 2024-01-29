import React, { useState, useEffect } from "react";

export default function Authentication(props) {
  // for connecting to spotify
  const CLIENT_ID = "6a3a08780096466d998e3fcb5343bfe9";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const REDIRECT_URI = "http://localhost:3000/";
  const RESPONSE_TYPE = "token";

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      let urlParams = new URLSearchParams(
        window.location.hash.replace("#", "?")
      );
      let token = urlParams.get("access_token");
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    props.updateAuthToken(token);
  }, []);

  const handleOnClick = () => {
    localStorage.removeItem("token");
    props.updateAuthToken("");
  };

  return (
    <>
      {!props.authToken && (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      )}

      {props.authToken && <button onClick={handleOnClick}>Logout</button>}

      <p>{props.authToken ?? "Empty"}</p>
    </>
  );
}
