import styles from "./PersonInfo.module.css";

const PersonInfo = ({ personInfo }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {personInfo.map(
          ({ title, data }) =>
            data && (
              <div key={title} className={styles.item}>
               <span className={styles.title}>{title}</span> : {data}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default PersonInfo;
