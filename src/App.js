import "./App.css";
import SearchContainer from "./Components/Search/SearchContainer";
import Authentication from "./Components/Authentication";
import React, { useState } from "react";

function App() {
  const [authToken, setAuthToken] = useState("");
  const [userId, setUserId] = useState("");

  const updateAuthToken = (val) => {
    const tmp = val;
    setAuthToken(tmp);
  };

  const updateUserId = (val) => {
    const tmp = val;
    setUserId(tmp);
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
            userId={userId}
            updateUserId={updateUserId}
          />
          <SearchContainer
            authToken={authToken}
            userId={userId}
            updateUserId={updateUserId}
          />
        </>
      )}
    </div>
  );
}

export default App;
