import React from "react";
import styles from "./SearchResults.module.css";

export default function SearchResults(props) {
  const trackList = props.tracks.map((track) => {
    return (
      <div className={styles.searchResultsContainer}>
        <li key={track.id} trackId={track.id} className={styles.track}>
          <text className={styles.trackTitle}>{track.name}</text>
          <text className={styles.trackInfo}>{track.artists[0].name}</text>
          <button onClick={props.addToPlaylist}>Add</button>
        </li>
      </div>
    );
  });

  return (
    <>
      <h2>Search Results</h2>
      <ul>{trackList}</ul>
    </>
  );
}

// {album
//   :
//   {album_type: 'single', artists: Array(1), available_markets: Array(179), external_urls: {…}, href: 'https://api.spotify.com/v1/albums/1oqv6oabMXbNpgZ6gmjAIN', …}
//   artists
//   :
//   [{…}]
//   available_markets
//   :
//   (179) ['AR', 'AU', 'AT', 'BO', 'BR', 'BG', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DK', 'DO', 'DE', 'EC', 'EE', 'SV', 'FI', 'FR', 'GR', 'GT', 'HN', 'HK', 'HU', 'IS', 'IT', 'LV', 'LT', 'MY', 'MT', 'MX', 'NL', 'NZ', 'NI', 'NO', 'PA', 'PY', 'PE', 'PH', 'PL', 'PT', 'SG', 'SK', 'ES', 'SE', 'CH', 'TW', 'TR', 'UY', 'US', 'AD', 'LI', 'MC', 'ID', 'JP', 'TH', 'VN', 'RO', 'IL', 'ZA', 'SA', 'AE', 'BH', 'QA', 'OM', 'KW', 'EG', 'MA', 'DZ', 'TN', 'LB', 'JO', 'PS', 'IN', 'BY', 'KZ', 'MD', 'UA', 'AL', 'BA', 'HR', 'ME', 'MK', 'RS', 'SI', 'KR', 'BD', 'PK', 'LK', 'GH', 'KE', 'NG', 'TZ', 'UG', 'AG', 'AM', 'BS', 'BB', 'BZ', 'BT', …]
//   disc_number
//   :
//   1
//   duration_ms
//   :
//   183518
//   explicit
//   :
//   false
//   external_ids
//   :
//   {isrc: 'NLF711805914'}
//   external_urls
//   :
//   {spotify: 'https://open.spotify.com/track/2xkrujtSjZz7EKAYGbIIzH'}
//   href
//   :
//   "https://api.spotify.com/v1/tracks/2xkrujtSjZz7EKAYGbIIzH"
//   id
//   :
//   "2xkrujtSjZz7EKAYGbIIzH"
//   is_local
//   :
//   false
//   name
//   :
//   "Blah Blah Blah"
//   popularity
//   :
//   69
//   preview_url
//   :
//   "https://p.scdn.co/mp3-preview/deb70c2604a47d58f7417bb058eb51ab3ed22449?cid=6a3a08780096466d998e3fcb5343bfe9"
//   track_number
//   :
//   1
//   type
//   :
//   "track"
//   uri
//   :
//   "spotify:track:2xkrujtSjZz7EKAYGbIIzH"}
