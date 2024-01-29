import React, { useState } from "react";
import Searchbar from "./Searchbar";

export default function SearchContainer(props) {
  const [searchInput, setSearchInput] = useState("");
  const handleUserInput = ({ target }) => {
    setSearchInput(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
    alert("Submitted your search... " + searchInput + "\nNow clearing");
    setSearchInput("");
  };

  const search = async () => {
    const endpoint = "https://api.spotify.com/v1/search";
    const query = endpoint + "?q=" + searchInput;
    const result = await fetch(query, {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(result);
  };

  return (
    <>
      <Searchbar
        searchInput={searchInput}
        handleUserInput={handleUserInput}
        handleSubmit={handleSubmit}
      />
      <p>{searchInput}</p>
    </>
  );
}
