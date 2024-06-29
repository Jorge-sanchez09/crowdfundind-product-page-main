import ButtonPrimary from "./ButtonPrimary.jsx";
import { useContext } from "react";
import { FundContext } from "./FundContext.jsx";
import PledgeModal from "./PledgeModal.jsx";

export default function Rewards() {
  const { rewards, selectReward, pledgeModal } = useContext(FundContext);

  function closeFormModal() {
    pledgeModal.current.close();
  }

  return (
    <ol className="rewards">
      <PledgeModal ref={pledgeModal} closeFormModal={closeFormModal} />

      {rewards.map((reward) => (
        <li
          key={reward.id}
          className={reward.stock > 0 ? "reward" : "reward out-of-stock"}
        >
          <header>
            <h3>{reward.name}</h3>
            <p>Pledge ${reward.minimumPledge} or more</p>
          </header>
          <p>{reward.description}</p>
          <div className="reward__button-container">
            <p className="reward__stock">
              <span className="font-big">{reward.stock}</span> left
            </p>
            <ButtonPrimary
              text={reward.stock > 0 ? "Select Reward" : "Out of stock"}
              onClick={() => {
                selectReward(reward.id);
              }}
              disabled={reward.stock <= 0}
            />
          </div>
        </li>
      ))}
    </ol>
  );
}
