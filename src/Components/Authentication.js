import React, { useState, useEffect } from "react";
import styles from "./Authentication.module.css";

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

  const logout = () => {
    localStorage.removeItem("token");
    props.updateAuthToken("");
  };

  // Logout user after 1 hour
  const logoutTimeout = () => {
    setTimeout(logout, 3600000);
  };

  return (
    <>
      {
        // Login screen
        !props.authToken && (
          <div className={styles.background}>
            <img
              className={styles.spotifyLogo}
              alt="Spotify Logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png"
            />
            <button onClick={logoutTimeout} className={styles.loginButton}>
              <a
                className={styles.link}
                href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
              >
                Login to Spotify
              </a>
            </button>
          </div>
        )
      }

      {
        // Logout button
        props.authToken && (
          <div className={styles.xStack}>
            <button onClick={logout} className={styles.logoutButton}>
              Logout
            </button>
          </div>
        )
      }
    </>
  );
}
