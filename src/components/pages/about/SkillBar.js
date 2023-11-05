import React from "react";

function SkillBar({ skill, level }) {
  return (
    <div className="skill-bar">
      <div className="skill-name">
        <code
          style={{
            color: "#fff",
            letterSpacing: "2px",
            fontSize: "16px",
          }}
        >
          {skill}
        </code>
      </div>
      <div className="progress-bar">
        <div className="progression" style={{ width: level }}>
          {level}
        </div>
      </div>
    </div>
  );
}

export default SkillBar;
