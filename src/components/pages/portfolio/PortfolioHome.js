import Portfolio from "./Portfolio";
import PortfolioMobile from "../portfolio/PortfolioMobile";
import "./PortfolioHome.scss";

function PortfolioHome() {
  return (
    <>
      <div className="portbig">
        <Portfolio />
      </div>
      <div className="portMob">
        <PortfolioMobile />
      </div>
    </>
  );
}

export default PortfolioHome;
