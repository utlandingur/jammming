import React from "react";
import styles from "./Searchbar.module.css";

export default function Searchbar(props) {
  const { searchInput, handleUserInput, handleSubmit } = props;

  return (
    <div className={styles.searchbarContainer}>
      <h1>Search for a song</h1>
      <div className={styles.searchbar}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            name="searchInput"
            id="searchInput"
            type="text"
            value={searchInput}
            onChange={handleUserInput}
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
