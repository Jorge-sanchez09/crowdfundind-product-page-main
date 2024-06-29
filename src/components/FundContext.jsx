import { createContext, useState, useRef } from "react";
import PropTypes from "prop-types";

export const FundContext = createContext({
  raisedMoney: 0,
  goal: 0,
  backers: 0,
  daysLeft: 0,
  rewards: [],
  setFundStats: () => {},
  selectReward: () => {},
});

const initialFunds = {
  raisedMoney: 89914,
  goal: 100000,
  backers: 5007,
  daysLeft: 56,
};

const initialRewards = [
  {
    id: 1,
    name: "Bamboo Stand",
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    minimumPledge: 25,
    stock: 101,
  },
  {
    id: 2,
    name: " Black Edition Stand",
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    minimumPledge: 75,
    stock: 64,
  },
  {
    id: 3,
    name: "Mahogany Special Edition",
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    minimumPledge: 200,
    stock: 0,
  },
];

export function FundContextProvider({ children }) {
  const [fundStats, setFundStats] = useState(initialFunds);
  const [selectedRewardID, setSelectedRewardID] = useState(null);
  const [rewards, setRewards] = useState(initialRewards);
  const pledgeModal = useRef(0);

  function addPledge(money, rewardID) {
    setFundStats((prevStats) => {
      return {
        ...prevStats,
        raisedMoney: prevStats.raisedMoney + parseInt(money),
        backers: prevStats.backers + 1,
      };
    });

    setRewards((prevRewards) => {
      return prevRewards.map((reward) => {
        if (reward.id === rewardID) {
          const updatedReward = { ...reward };
          updatedReward.stock--;

          return updatedReward;
        }

        return reward;
      });
    });
  }

  function selectReward(id) {
    setSelectedRewardID(id);
    pledgeModal.current.showModal();
  }

  const contextValue = {
    fundStats,
    rewards,
    addPledge,
    pledgeModal,
    selectReward,
    selectedRewardID,
  };

  return (
    <FundContext.Provider value={contextValue}>{children}</FundContext.Provider>
  );
}

FundContextProvider.propTypes = {
  children: PropTypes.element,
};
