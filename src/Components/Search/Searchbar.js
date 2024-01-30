import React from "react";
import styles from "./Searchbar.module.css";

export default function Searchbar(props) {
  return (
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
          // style={{
          //   flexGrow: 1,
          //   borderRadius: 16,
          //   borderWidth: 1,
          //   borderColor: "black",
          // }}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
}
