import { Link } from "react-router-dom";

import styles from "./PeopleList.module.css";

const PeopleList = ({ people }) => {
  return (
    <div className={styles.list__container}>
      {people.map(({ id, name, img }) => (
        <Link to={`/people/${id}`} key={id} className={styles.list__item}>
          <img className={styles.person__photo} src={img} alt={name} />
          <div className={styles.name}>{name}</div>
        </Link>
      ))}
    </div>
  );
};

export default PeopleList;
