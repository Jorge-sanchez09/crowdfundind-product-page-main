import ButtonPrimary from "./ButtonPrimary.jsx";
import ThankYouModal from "./ThankYouModal.jsx";
import { FundContext } from "./FundContext.jsx";
import { useContext, useRef } from "react";
import PropTypes from "prop-types";

export default function RewardsForm({ closeFormModal }) {
  const { rewards, addPledge, selectedRewardID, selectReward } =
    useContext(FundContext);
  const modalCompleted = useRef(null);

  return (
    <>
      <form
        action=""
        className="rewards-form"
        onSubmit={(e) => {
          e.preventDefault();
          closeFormModal();
          addPledge(e.target.elements["pledge"].value, selectedRewardID);
          modalCompleted.current.showModal();
        }}
      >
        <ol>
          <li
            className={
              selectedRewardID === null ? "item item--selected" : "item"
            }
          >
            <div className="item__info">
              <label className="item__name">
                <input
                  type="radio"
                  name="reward"
                  value="no-reward"
                  checked={!selectedRewardID}
                  onChange={() => {
                    selectReward(null);
                  }}
                />
                Pledge with no reward
              </label>
              <p>
                Choose to support us without a reward if you simply believe in
                our project. As a backer, you will be signed up to receive
                product updates via email.
              </p>
            </div>
            {!selectedRewardID && (
              <div className="selected__pledge">
                <label htmlFor="pledge">Enter your pledge</label>
                <div className="buttons-container">
                  <div className="input-container">
                    $
                    <input
                      type="number"
                      id="pledge"
                      name="pledge"
                      defaultValue={1}
                      min={1}
                      max={1000}
                      required
                    />
                  </div>
                  <ButtonPrimary text="Continue" />
                </div>
              </div>
            )}
          </li>
          {rewards.map((reward) => (
            <li
              key={reward.id}
              className={
                reward.id === selectedRewardID ? "item item--selected" : "item"
              }
            >
              <div
                className={
                  reward.stock > 0 ? "item__info" : "item__info out-of-stock"
                }
              >
                <div className="item__header">
                  <input
                    type="radio"
                    id={reward.id}
                    name="reward"
                    value={reward.id}
                    checked={reward.id === selectedRewardID}
                    disabled={reward.stock <= 0}
                    onChange={() => {
                      selectReward(reward.id);
                    }}
                  />
                  <div className="item__header-text">
                    <label htmlFor={reward.id} className="item__name">
                      {reward.name}
                    </label>
                    <p className="item__pledge">
                      Pledge ${reward.minimumPledge} or more
                    </p>
                  </div>
                </div>
                <p>{reward.description}</p>
                <p className="stock">
                  <span>{reward.stock}</span> left
                </p>
              </div>
              {reward.id === selectedRewardID && (
                <div className="selected__pledge">
                  <label htmlFor="pledge">Enter your pledge</label>
                  <div className="buttons-container">
                    <div className="input-container">
                      $
                      <input
                        type="number"
                        id="pledge"
                        name="pledge"
                        defaultValue={reward.minimumPledge}
                        min={reward.minimumPledge}
                        max={1000}
                        required
                      />
                    </div>
                    <ButtonPrimary text="Continue" />
                  </div>
                </div>
              )}
            </li>
          ))}
        </ol>
      </form>
      <ThankYouModal ref={modalCompleted} />
    </>
  );
}

RewardsForm.propTypes = {
  closeFormModal: PropTypes.func,
};
