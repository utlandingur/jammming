import logo from "./logo.svg";
import "./App.css";
import SearchContainer from "./Components/Search/SearchContainer";
import Authentication from "./Components/Authentication";
import React, { useEffect, useState } from "react";

function App() {
  const [authToken, setAuthToken] = useState("");

  const updateAuthToken = (val) => {
    console.log("here");
    const tmp = val;
    setAuthToken(tmp);
  };

  return (
    <>
      <Authentication authToken={authToken} updateAuthToken={updateAuthToken} />
      <SearchContainer authToken={authToken} />
    </>
  );
}

export default App;
