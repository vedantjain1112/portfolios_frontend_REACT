import Services from "./Services";
import ServicesMobile from "../services/ServicesMobile";
import "./ServicesHome.scss";
function ServicesHome() {
  return (
    <>
      <div className="class">
        <Services />
      </div>
      <div className="servicesm">
        <ServicesMobile />
      </div>
    </>
  );
}

export default ServicesHome;
