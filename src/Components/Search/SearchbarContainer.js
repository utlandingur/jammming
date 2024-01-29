import React, { useState } from "react";
import Searchbar from "./Searchbar";
import axios from "axios";

export default function SearchContainer(props) {
  const [searchInput, setSearchInput] = useState("");
  const handleUserInput = ({ target }) => {
    setSearchInput(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(props.authToken);
    console.log(searchInput);
    const endpoint = "https://api.spotify.com/v1/search";
    const { data } = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${props.authToken}`,
      },
      params: {
        q: searchInput,
        type: "artist",
      },
    });

    console.log(data);
  };

  return (
    <>
      <Searchbar
        searchInput={searchInput}
        handleUserInput={handleUserInput}
        handleSubmit={handleSubmit}
      />
      <p>{searchInput}</p>
      <p>{props.authToken ?? "Empty"}</p>
    </>
  );
}
