import { FundContext } from "./FundContext.jsx";
import { useContext } from "react";

export default function Stats() {
  const { fundStats } = useContext(FundContext);

  return (
    <div className="stats">
      <ul>
        <li>
          <p className="stats__item-text">
            <span className="font-big">
              ${fundStats.raisedMoney.toLocaleString("en-US")}
            </span>{" "}
            of ${fundStats.goal.toLocaleString("en-US")} backed
          </p>
        </li>
        <li>
          <p className="stats__item-text">
            <span className="font-big">
              {fundStats.backers.toLocaleString("en-US")}
            </span>{" "}
            total backers
          </p>
        </li>
        <li>
          <p className="stats__item-text">
            <span className="font-big">{fundStats.daysLeft}</span> days left
          </p>
        </li>
      </ul>
      <progress max={fundStats.goal} value={fundStats.raisedMoney}></progress>
    </div>
  );
}
