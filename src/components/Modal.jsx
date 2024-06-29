import { forwardRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const Modal = forwardRef(function Modal({ children, className }, ref) {
  return createPortal(
    <dialog className={className} ref={ref}>
      {children}
    </dialog>,
    document.getElementById("root")
  );
});

Modal.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
};

export default Modal;
