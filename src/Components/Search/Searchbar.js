import React from "react";
import styles from "./Searchbar.module.css";

export default function Searchbar(props) {
  return (
    <form style={{ display: "inline" }} onSubmit={props.handleSubmit}>
      <label htmlFor="searchInput" visibility="hidden" className={styles.label}>
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
  );
}
