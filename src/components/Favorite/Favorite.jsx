import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import styles from "./Favorite.module.css";
import icon from "./img/favorite-fill.svg";

const Favorite = () => {
  const [count, setCount] = useState();

  const storeData = useSelector((state) => state.favorite);

  useEffect(() => {
    const length = Object.keys(storeData).length;
		length.toString().length > 2 ? setCount('...') : setCount(count)
    setCount(length);
  });

  return (
    <div className={styles.container}>
      <Link to="/favorite">
        <span className={styles.counter}>{count}</span>
        <img className={styles.icon} src={icon} alt="Favorite" />
      </Link>
    </div>
  );
};

export default Favorite;
