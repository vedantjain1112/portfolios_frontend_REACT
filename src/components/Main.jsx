import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaInfo, FaBriefcase, FaImage, FaPhone } from "react-icons/fa";
import "./Main.scss";

function Main() {
  return (
    <>
      <div className="verywellMainclass">
        <div className="wrapper">
          <div className="box">
            <Link to="/my_self">
              <FaUser />
            </Link>
            <Link to="/about-myself">
              <FaInfo />
            </Link>
            <Link to="/my-services">
              <FaBriefcase />
            </Link>
            <Link to="/my-projects">
              <FaImage />
            </Link>
            <Link to="/contact">
              <FaPhone />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
