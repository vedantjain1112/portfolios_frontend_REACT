import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import "./Navbar.scss";

function Navbar() {
  const [isNavBarActive, setNavBarActive] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const handleMenuIconClick = () => {
    setNavBarActive((prevActive) => !prevActive);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="header" id="home">
        <div className="logoo">
          <h2>
            Ved<span style={{ marginLeft: "0" }}>ant</span>
          </h2>
        </div>
        <nav className={isNavBarActive ? "active" : ""} id="navimumbai">
          <ul className="links" style={{ cursor: "pointer" }}>
            <li>
              <Link
                to="/"
                className="active anchorTAGHUmein"
                style={{
                  color: "red",
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/my_self" className="anchorTAGHUmein">
                Me
              </Link>
            </li>
            <li>
              <Link to="/about-myself" className="anchorTAGHUmein">
                About
              </Link>
            </li>
            <li>
              <Link to="/my-services" className="anchorTAGHUmein">
                Services
              </Link>
            </li>
            <li>
              <Link to="/my-projects" className="anchorTAGHUmein">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="anchorTAGHUmein">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div id="login-btn-container">
          <div className="clock-container">
            <div id="clock">
              <div id="time">
                <div>
                  <span id="hour">
                    {currentTime.getHours().toString().padStart(2, "0")}
                  </span>
                  <span>Hours</span>
                </div>
                <div>
                  <span id="minute">
                    {currentTime.getMinutes().toString().padStart(2, "0")}
                  </span>
                  <span>Minutes</span>
                </div>
                <div>
                  <span id="second">
                    {currentTime.getSeconds().toString().padStart(2, "0")}
                  </span>
                  <span>Seconds</span>
                </div>
                <div>
                  <span id="ampm">
                    {currentTime.getHours() >= 12 ? "PM" : "AM"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ts"
          style={{
            position: "relative",
            cursor: "pointer",
            display: "inline-block",
            marginRight: "60px",
            marginBottom: "38px",
          }}
        ></div>
        <FaBars
          style={{
            color: "#fff",
          }}
          icon="fa fa-bars"
          id="menu-icon"
          onClick={handleMenuIconClick}
        />
      </div>
    </>
  );
}

export default Navbar;
