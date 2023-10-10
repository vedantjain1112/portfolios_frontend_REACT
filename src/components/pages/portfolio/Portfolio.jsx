import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Navbar from "../../header/Navbar";
import { Link } from "react-router-dom";
import "./Portfolio.scss";
const baseUrl = "https://server-ti6g.onrender.com";

function Portfolio() {
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
        setIsLoading(true);
      });
  }, []);

  return (
    <>
      <Navbar />
      <h2 className="phtwo">Projects Done by Me</h2>

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
          {portfolioData.map((item, index) => (
            <div className="cardingCARD" key={index} style={{ "--clr": "red" }}>
              <div className="ImaageBox">
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <div className="contentWritten">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <Link to={item.link}>
                  {" "}
                  <FaExternalLinkAlt />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Portfolio;
