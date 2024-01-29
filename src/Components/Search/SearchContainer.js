import React from "react";
import SearchbarContainer from "./SearchbarContainer";

export default function SearchContainer(props) {
  return (
    <>
      <SearchbarContainer authToken={props.authToken} />
    </>
  );
}
