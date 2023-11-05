import React, { useState, useEffect } from "react";
import axios from "axios";
import "./About.scss";
import SkillBar from "./SkillBar";
import Navbar from "../../header/Navbar";
const baseUrl = "https://server-ti6g.onrender.com";

function About() {
  const [aboutData, setAboutData] = useState({
    name: "",
    image: "",
    paragraph: "",
  });

  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const aboutResponse = await axios.get(`${baseUrl}/about`);
        setAboutData(aboutResponse.data);

        const skillsResponse = await axios.get(`${baseUrl}/skills`);
        setSkills(skillsResponse.data);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(true);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />

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
        <div className="about-container">
          <div className="about-content">
            <img
              src={`${baseUrl}/${aboutData.image}`}
              alt={aboutData.name}
              className="profile-image"
            />
            <h1 className="name">{aboutData.name}</h1>
            <p className="about-paragraph">{aboutData.paragraph}</p>

            <div className="skillsKnown">
              <h2 className="skillsTag">Skills I'm Acquainted With</h2>
            </div>

            <div className="skills">
              {skills.map((skill) => (
                <SkillBar
                  key={skill._id}
                  skill={skill.skill}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default About;
