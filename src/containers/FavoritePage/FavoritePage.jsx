import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PeopleList from "../../components/PeoplePage/PeopleList/PeopleList";

import styles from "./FavoritePage.module.css";

const FavoritePage = () => {
  const [people, setPeople] = useState([]);
  const storeData = useSelector((state) => state.favorite);

  useEffect(() => {
    const arr = Object.entries(storeData);

    if (arr.length) {
      const res = arr.map((item) => {
        return {
          id: item[0],
          name: item[1].name,
          img: item[1].img,
          ...item[1],
        };
      });
      setPeople(res);
    }
  },[]);

  return (
    <>
      {people.length ? (
        <PeopleList people={people} />
      ) : (
        <div className={styles.comment}>No data</div>
      )}
    </>
  );
};

export default FavoritePage;
