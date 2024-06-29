import ButtonPrimary from "./ButtonPrimary.jsx";
import mastercarftLogo from "../assets/images/logo-mastercraft.svg";
import { useContext } from "react";
import { FundContext } from "./FundContext.jsx";

export default function Product() {
  const { selectReward } = useContext(FundContext);
  return (
    <section className="product">
      <div className="product__info">
        <header>
          <img src={mastercarftLogo} alt="Mastercarft Logo" />
          <h1>Mastercraft Bamboo Monitor Riser</h1>
        </header>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </div>
      <div className="product__buttons-container">
        <ButtonPrimary
          onClick={() => selectReward(null)}
          text="Back this project"
        />
        <label>
          <svg
            width="56"
            height="56"
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
          >
            <g fill="none" fillRule="evenodd">
              <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
              <path fill="#aaa" d="M23 19v18l5-5.058L33 37V19z" />
            </g>
          </svg>
          <input type="checkbox"></input>
          <span>Bookmark</span>
        </label>
      </div>
    </section>
  );
}
