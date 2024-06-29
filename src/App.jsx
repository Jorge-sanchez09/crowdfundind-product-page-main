import Header from "./components/Header.jsx";
import Product from "./components/Product.jsx";
import Stats from "./components/Stats.jsx";
import About from "./components/About.jsx";
import Rewards from "./components/Rewards.jsx";
import { FundContextProvider } from "./components/FundContext.jsx";

function App() {
  return (
    <>
      <Header />
      <FundContextProvider>
        <main>
          <Product />
          <Stats />
          <About>
            <Rewards />
          </About>
        </main>
      </FundContextProvider>
    </>
  );
}

export default App;
