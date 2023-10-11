import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../header/Navbar";
import "./PortfolioMobile.scss";
import { FaExternalLinkAlt } from "react-icons/fa";
const baseUrl = "https://server-ti6g.onrender.com";

function ServicesMobile() {
  const [portfolioData, setPortfolioData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseUrl}/api/portfolio`)
      .then((response) => response.json())
      .then((data) => {
        setPortfolioData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching portfolio data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="services-area">
        <div className="wrapper">
          <div className="section-header">
            <h1>Projects Done by Me</h1>
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
              {portfolioData.map((item, index) => (
                <div className="single-item" key={index}>
                  <div className="item-box">
                    <div className="icon-area">
                      <img
                        className="imagelogoBOX"
                        src={item.imageUrl}
                        alt={item.title}
                      />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Link
                      to={item.link}
                      className="learned"
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <FaExternalLinkAlt />
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
