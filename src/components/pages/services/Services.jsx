import { useEffect, useState } from "react";
import Navbar from "../../header/Navbar";
import { Link } from "react-router-dom";
import "./Services.scss";
const baseUrl = "https://server-ti6g.onrender.com";

function Services() {
  const [serviceData, setServiceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseUrl}/api/service`)
      .then((response) => response.json())
      .then((data) => {
        setServiceData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching service data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <h2 className="phtwo">My Skills</h2>

      {isLoading ? (
        <p
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: "normal",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Loading...
        </p>
      ) : (
        <div className="containeerContainingClass">
          {serviceData.map((item, index) => (
            <div className="cardingCARD" key={index} style={{ "--clr": "red" }}>
              <div className="ImaageBox">
                <img src={item.icon} alt={item.title} />
              </div>
              <div className="contentWritten">
                <h2>{item.serviceTitle}</h2>
                <p>{item.description}</p>
                <Link to={item.link}>Learn</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Services;
