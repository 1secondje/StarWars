import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEUTRAL,
} from "../../context/ThemeProvider";

import Favorite from "../Favorite/Favorite";

import imgDroid from "./img/droid.svg";
import imgLightSaber from "./img/lightsaber.svg";
import imgSpaceStation from "./img/space-station.svg";

import styles from "./Header.module.css";

const Header = () => {
  const [icon, setIcon] = useState(imgSpaceStation);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLightSaber);
        break;
      case THEME_DARK:
        setIcon(imgSpaceStation);
        break;
      case THEME_NEUTRAL:
        setIcon(imgDroid);
        break;
      default:
        setIcon(imgSpaceStation)
    }
  }, [isTheme]);
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <img src={icon} alt="logo" className={styles.logo}></img>
        <div className={styles.link}>
          <NavLink to="/">Home</NavLink>
        </div>
        <div className={styles.link}>
          <NavLink to="/people/?page=1">People</NavLink>
        </div>
        <div className={styles.link}>
          <NavLink to="/search">Search</NavLink>
        </div>
      </div>
      <Favorite />
    </div>
  );
};

export default Header;
