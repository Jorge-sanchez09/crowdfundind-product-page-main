import { forwardRef } from "react";
import Modal from "./Modal.jsx";
import ButtonPrimary from "./ButtonPrimary.jsx";
import checkIcon from "../assets/images/icon-check.svg";

const ThankYouModal = forwardRef(function ThankYouModal(props, ref) {
  return (
    <Modal ref={ref} className="thank-you-modal">
      <div className="thank-you-modal__content">
        <img src={checkIcon} alt="" />
        <div className="thank-you-modal__text">
          <h3>Thanks for your support</h3>
          <p>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
        </div>
        <form method="dialog">
          <ButtonPrimary text="Got it!" onClick={() => ref.current.close()} />
        </form>
      </div>
    </Modal>
  );
});

export default ThankYouModal;
