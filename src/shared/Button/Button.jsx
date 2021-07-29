import "./Button.scss";
import PropTypes from "prop-types";

export function Button({ text, classNames, isSubmit }) {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className={`button ${classNames}`}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  classNames: "",
  isSubmit: false,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  isSubmit: PropTypes.bool,
};
