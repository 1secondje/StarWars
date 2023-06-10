import styles from "./Button.module.css";
import cn from 'classnames'

const Button = ({ text, onClick, disabled, theme='dark' }) => {
  return (
    <button onClick={onClick} className={cn(styles.button, styles[theme])} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
