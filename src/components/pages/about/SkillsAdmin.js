import React, { useState } from "react";
import axios from "axios";
const baseUrl = "https://server-ti6g.onrender.com";

function SkillsAdmin() {
  const [skillData, setSkillData] = useState({
    skill: "",
    level: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSkillData({
      ...skillData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${baseUrl}/skills`, skillData);
      console.log("Skill added successfully");
    } catch (error) {
      console.error("Error adding skill:", error);
    }
  };

  return (
    <>
      <div
        className="mainadmin"
        style={{
          width: "500px",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "30px",
          border: "3px dotted green",
          padding: "30px",
          margin: "0 auto",
          borderRadius: "8px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <input
            name="skill"
            type="text"
            value={skillData.skill}
            onChange={handleInputChange}
            style={{
              padding: "10px",
              width: "100%",
              border: "2px dotted red",
              borderRadius: "8px",
            }}
            placeholder="Enter skill name"
          />
          <input
            name="level"
            type="text"
            value={skillData.level}
            onChange={handleInputChange}
            style={{
              padding: "10px",
              width: "100%",
              border: "2px dotted red",
              borderRadius: "8px",
            }}
            placeholder="Enter skill level"
          />
          <button type="submit" style={{ marginTop: "10px" }}>
            Add Skill
          </button>
        </form>
      </div>
    </>
  );
}

export default SkillsAdmin;
