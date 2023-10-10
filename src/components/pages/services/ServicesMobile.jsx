import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../header/Navbar";
import "./ServicesMobile.scss";
const baseUrl = "https://server-ti6g.onrender.com";

function ServicesMobile() {
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
      <div className="services-area">
        <div className="wrapper">
          <div className="section-header">
            <h1>My Skills</h1>
          </div>
        </div>

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
          <div className="wrapper">
            <div className="items">
              {serviceData.map((item, index) => (
                <div className="single-item" key={index}>
                  <div className="item-box">
                    <div className="icon-area">
                      <img
                        className="imagelogoBOX"
                        src={item.icon}
                        alt={item.title}
                      />
                    </div>
                    <h3>{item.serviceTitle}</h3>
                    <p>{item.description}</p>
                    <Link
                      to={item.link}
                      className="learnt"
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      Learn
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ServicesMobile;
