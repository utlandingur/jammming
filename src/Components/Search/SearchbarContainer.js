import React, { useState } from "react";
import Searchbar from "./Searchbar";
import axios from "axios";

export default function SearchContainer(props) {
  const { updateTracks } = props;
  const [searchInput, setSearchInput] = useState("");

  const handleUserInput = ({ target }) => {
    setSearchInput(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = "https://api.spotify.com/v1/search";
      const { data } = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${props.authToken}`,
        },
        params: {
          q: searchInput,
          type: "track",
        },
      });
      updateTracks(data.tracks.items);
    } catch (error) {
      console.log("Empty search value");
    }
  };

  return (
    <>
      <Searchbar
        searchInput={searchInput}
        handleUserInput={handleUserInput}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
