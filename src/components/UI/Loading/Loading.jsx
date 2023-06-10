import loaderWhite from "./img/loader-white.svg";
import loaderBlack from "./img/loader-black.svg";
import loaderblue from "./img/loader-blue.svg";

import cn from 'classnames'

import styles from "./Loading.module.css";
import { useState, useEffect } from "react";

const Loading = ({ theme = "white", isShadow = true }) => {
  const [loaderIcon, setLoaderIcon] = useState(null);

  useEffect(() => {
    switch (theme) {
      case "black":
        setLoaderIcon(loaderBlack);
        break;
      case "white":
        setLoaderIcon(loaderWhite);
        break;
      case "blue":
        setLoaderIcon(loaderblue);
        break;

      default:
        setLoaderIcon(loaderWhite);
    }
  });

  return <img className={cn(styles.loader, isShadow && styles.shadow)} src={loaderIcon} alt="loader" />;
};

export default Loading;
