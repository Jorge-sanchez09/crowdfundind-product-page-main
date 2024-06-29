import { PropTypes } from "prop-types";

export default function ButtonPrimary({ text, ...props }) {
  let buttonClasses = "button-primary";

  return (
    <button className={buttonClasses} {...props}>
      {text}
    </button>
  );
}

ButtonPrimary.propTypes = {
  text: PropTypes.string.isRequired,
};
