import logo from "./logo.svg";
import "./App.css";
import SearchContainer from "./Components/Search/SearchContainer";
import Authentication from "./Components/Authentication";
import React, { useEffect, useState } from "react";

function App() {
  const [authToken, setAuthToken] = useState("");

  const updateAuthToken = (val) => {
    const tmp = val;
    setAuthToken(tmp);
  };

  return (
    <div
      style={{
        backgroundColor: "#0B192F",
        minHeight: "100vh",
        padding: "5px 10px 10px 20px",
      }}
    >
      {!authToken && (
        <Authentication
          authToken={authToken}
          updateAuthToken={updateAuthToken}
        />
      )}
      {authToken && (
        <>
          <Authentication
            authToken={authToken}
            updateAuthToken={updateAuthToken}
          />
          <SearchContainer authToken={authToken} />
        </>
      )}
    </div>
  );
}

export default App;
