import Modal from "./Modal.jsx";
import RewardsForm from "./RewardsForm.jsx";
import { forwardRef } from "react";
import PropTypes from "prop-types";

const PledgeModal = forwardRef(function PledgeModal({ closeFormModal }, ref) {
  return (
    <Modal ref={ref} className="pledge-modal">
      <section>
        <header>
          <h3>Back this project</h3>
          <form method="dialog">
            <button>
              <svg
                width="14"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
                opacity={0.4}
              >
                <g fill="000" fillRule="evenodd">
                  <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
                  <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
                </g>
              </svg>
            </button>
          </form>
        </header>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <RewardsForm closeFormModal={closeFormModal} />
      </section>
    </Modal>
  );
});

PledgeModal.propTypes = {
  closeFormModal: PropTypes.func,
};

export default PledgeModal;
