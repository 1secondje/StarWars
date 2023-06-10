import { useState, useEffect } from "react";
import { makeConcurrentRequest, changeHTTP } from "../../../utils/network";

import styles from "./PersonFilms.module.css";

const PersonFilms = ({ personFilms }) => {
  const [filmsName, setFilmsName] = useState([]);

  useEffect(() => {
    (async () => {
      const filmsHTTPS = personFilms.map((url) => changeHTTP(url));
      const response = await makeConcurrentRequest(filmsHTTPS);
      setFilmsName(response);
    })();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {filmsName
				.sort((a, z) => a.episode_id - z.episode_id)
				.map(({ title, episode_id }) => 
          <div key={episode_id} className={styles.item}>
            <span className={styles.episode}>Episode {episode_id}</span>
            <span className={styles.colon}> : </span>
            <span className={styles.title}>{title}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonFilms;
