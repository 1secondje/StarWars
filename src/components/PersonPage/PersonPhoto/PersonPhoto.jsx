import { useDispatch } from "react-redux";
import  cn  from "classnames";

import { removePersonFromFavorite, setPersonToFavorite } from "../../../store/favoriteSlice";

import iconFavorite from "./img/favorite.svg";
import iconFavoriteFill from "./img/favorite-fill.svg";

import styles from "./PersonPhoto.module.css";

const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto,
          },
        })
      );
      setPersonFavorite(true);
    }
  };

  return (
    <div className={styles.container}>
      <img className={styles.photo} src={personPhoto} alt={personName} />
      <button className={cn(styles.favorite, personFavorite ? styles.dark : styles.white)} onClick={dispatchFavoritePeople}>
        <img
          src={personFavorite ? iconFavoriteFill : iconFavorite}
          alt="add to favorite"
        />
      </button>
    </div>
  );
};

export default PersonPhoto;
