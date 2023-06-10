import { useLocation } from "react-router-dom";
import img from "./img/not-found.png";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  let location = useLocation();
  return (
    <div className={styles.container}>
      <img className={styles.img} src={img} alt="not found" />
      <div className={styles.text}>Not match for: {location.pathname}</div>
    </div>
  );
};

export default NotFoundPage;
