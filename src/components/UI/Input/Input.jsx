import cn from 'classnames'

import icon from './img/cancel.svg'

import styles from "./Input.module.css";

const Input = ({ value, handleInputChange, placeholder }) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={placeholder}
				className={styles.input}
      />
			<button onClick={() => value && handleInputChange('')} className={cn(styles.clear, value && styles.clear__active)}>
				<img className={cn(styles.img)} src={icon} alt="cancel" />
			</button>
			
    </div>
  );
};

export default Input;
