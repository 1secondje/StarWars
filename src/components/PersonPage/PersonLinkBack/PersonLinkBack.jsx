import { useNavigate } from "react-router-dom";

import iconBack from './img/back.svg'
import styles from "./PersonLinkBack.module.css";

const PersonLinkBack = () => {
	const navigate = useNavigate();
  const handleGoBack = (e) => {
		navigate(-1)
  };

  return (
    <div onClick={handleGoBack} className={styles.link}>
      <img src={iconBack} alt="Go back" className={styles.img} />
			<div className="">Go back</div>
    </div>
  );
};

export default PersonLinkBack;
