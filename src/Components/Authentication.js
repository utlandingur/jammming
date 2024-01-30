import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Authentication.module.css";

// TODO - make a container and put two jsx components in sub-components

export default function Authentication(props) {
  // for connecting to spotify
  const CLIENT_ID = "6a3a08780096466d998e3fcb5343bfe9";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const PROFILE_ENDPOINT = "https://api.spotify.com/v1/me";
  const REDIRECT_URI = "http://localhost:3000/";
  const RESPONSE_TYPE = "token";
  let count = 0;

  // grab the spotify users ID
  const getUserId = async () => {
    try {
      const endpoint = "https://api.spotify.com/v1/me";
      const { data } = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${props.authToken}`,
        },
      });
      const { id } = data;
      console.log(id);
      props.updateUserId(id);
    } catch (error) {
      console.log("Error getting user ID");
    }
  };

  const updateAuth = () => {
    let urlParams = new URLSearchParams(window.location.hash.replace("#", "?"));
    let token = urlParams.get("access_token");
    window.location.hash = "";
    window.localStorage.setItem("token", token);
  };

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      updateAuth();
    }
    props.updateAuthToken(token);
    if (!props.userId && props.authToken) {
      getUserId();
    }
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
