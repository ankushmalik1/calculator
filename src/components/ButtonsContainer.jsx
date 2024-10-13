import styles from "./ButtonsContainer.module.css";
import PropTypes from "prop-types";

const ButtonsContainer = ({ buttonNames }) => {
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((item) => (
        <button key={item} className={styles.button}>
          {item}
        </button>
      ))}
    </div>
  );
};

ButtonsContainer.propTypes = {
  buttonNames: PropTypes.arrayOf(PropTypes.string).isRequired, // Ensure buttonNames is an array of strings and is required
};

export default ButtonsContainer;
