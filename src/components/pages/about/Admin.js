import React, { useState } from "react";
import axios from "axios";
const baseUrl = "https://server-ti6g.onrender.com";

function Admin() {
  const [formData, setFormData] = useState({
    name: "",
    paragraph: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("paragraph", formData.paragraph);
    data.append("image", formData.image);

    try {
      await axios.post(`${baseUrl}/about`, data);
      console.log("Data posted successfully");
    } catch (error) {
      console.error("Error posting data:", error);
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
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            style={{
              padding: "10px",
              width: "100%",
              border: "2px dotted red",
              borderRadius: "8px",
            }}
            placeholder="Enter your name"
          />
          <textarea
            name="paragraph"
            value={formData.paragraph}
            onChange={handleInputChange}
            style={{
              padding: "10px",
              width: "100%",
              border: "2px dotted red",
              borderRadius: "8px",
              resize: "none",
              overflow: "auto",
            }}
            placeholder="Enter your text"
            cols="50"
            rows="10"
          />
          <input
            name="image"
            type="file"
            onChange={handleFileChange}
            style={{
              padding: "10px",
              width: "100%",
              border: "2px dotted red",
              borderRadius: "8px",
            }}
            accept="image/*"
          />
          <button type="submit" style={{ marginTop: "10px" }}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Admin;
