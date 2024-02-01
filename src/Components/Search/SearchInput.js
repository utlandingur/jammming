import React, { useState } from "react";
import styles from "./SearchInput.module.css";

export default function Searchbar({
  searchInput,
  handleUserInput,
  handleSubmit,
}) {
  return (
    <form style={{ display: "inline" }} onSubmit={handleSubmit}>
      <label htmlFor="searchInput" visibility="hidden" className={styles.label}>
        Search:
      </label>
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
  );
}
