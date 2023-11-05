import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Navbar from "../../header/Navbar";
import {
  faLinkedin,
  faGithub,
  faSquareXTwitter,
  faInstagram,
  faFacebook,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";
import "./MySelf.scss";
import { Link } from "react-router-dom";
const baseUrl = "https://server-ti6g.onrender.com";

const MySelf = () => {
  const [mySelfData, setMySelfData] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: "",
    icons: {
      facebook: "",
      instagram: "",
      linkedin: "",
      github: "",
      twitter: "",
      threads: "",
    },
    cvLink: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMySelfData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/myself`);
        setMySelfData(response.data || {});
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching MySelf data:", error);
        setIsLoading(true);
      }
    };

    fetchMySelfData();
  }, []);

  return (
    <>
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
        <div className="impMain">
          <div className="navigationHeader">
            <Navbar />
          </div>
          <div className="mainHomeclsd">
            <header className="headerComponent">
              <h1 className="titleHomeclsd">{mySelfData.title || ""}</h1>
              <h2 className="subtitle">{mySelfData.subtitle || ""}</h2>
              <p className="description">{mySelfData.description || ""}</p>
              <img
                className="profile-image"
                src={`${baseUrl}/${mySelfData.image || ""}`}
                alt="Vedant Modi"
              />
              <div className="social-icons">
                <Link to={mySelfData.icons?.facebook || ""}>
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link to={mySelfData.icons?.instagram || ""}>
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link to={mySelfData.icons?.linkedin || ""}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link to={mySelfData.icons?.github || ""}>
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link to={mySelfData.icons?.twitter || ""}>
                  <FontAwesomeIcon icon={faSquareXTwitter} />
                </Link>
                <Link to={mySelfData.icons?.threads || ""}>
                  <FontAwesomeIcon icon={faThreads} />
                </Link>
              </div>
              <Link className="cv-link" to={mySelfData.cvLink || ""} download>
                Download my Resume
              </Link>
            </header>
          </div>
        </div>
      )}
    </>
  );
};

export default MySelf;
