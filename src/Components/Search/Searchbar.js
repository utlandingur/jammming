import React from "react";
import styles from "./Searchbar.module.css";

export default function Searchbar(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px",
      }}
    >
      <h1>Search for a song</h1>
      <div className={styles.searchbar}>
        <form className={styles.form} onSubmit={props.handleSubmit}>
          <label
            htmlFor="searchInput"
            style={{ display: "none" }}
            className={styles.label}
          >
            Search:
          </label>
          <input
            name="searchInput"
            id="searchInput"
            type="text"
            value={props.searchInput}
            onChange={props.handleUserInput}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
