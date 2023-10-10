import React, { useState } from "react";
import axios from "axios";
const baseUrl = "https://server-ti6g.onrender.com";

const MySelfAdmin = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    cvLink: "",
    icons: {
      facebook: "",
      instagram: "",
      twitter: "",
      github: "",
      threads: "",
      linkedin: "",
    },
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleIconChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      icons: {
        ...prevData.icons,
        [name]: value,
      },
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (key === "icons") {
        for (const iconKey in formData.icons) {
          formDataToSend.append(`icons[${iconKey}]`, formData.icons[iconKey]);
        }
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      await axios.post(`${baseUrl}/myself`, formDataToSend);
      alert("Data updated successfully");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };
  return (
    <div>
      <h1>Admin MySelf Page</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          color: "white",
        }}
      >
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Subtitle:
          <input
            type="text"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Image:
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
        <br />

        <label>
          CV Link:
          <input
            type="text"
            name="cvLink"
            value={formData.cvLink}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Facebook:
          <input
            type="text"
            name="facebook"
            value={formData.icons.facebook}
            onChange={(e) => handleIconChange(e, "facebook")}
          />
        </label>
        <br />

        <label>
          Instagram:
          <input
            type="text"
            name="instagram"
            value={formData.icons.instagram}
            onChange={(e) => handleIconChange(e, "instagram")}
          />
        </label>
        <br />

        <label>
          Twitter:
          <input
            type="text"
            name="twitter"
            value={formData.icons.twitter}
            onChange={(e) => handleIconChange(e, "twitter")}
          />
        </label>
        <br />

        <label>
          Github:
          <input
            type="text"
            name="github"
            value={formData.icons.github}
            onChange={(e) => handleIconChange(e, "github")}
          />
        </label>
        <br />

        <label>
          Threads:
          <input
            type="text"
            name="threads"
            value={formData.icons.threads}
            onChange={(e) => handleIconChange(e, "threads")}
          />
        </label>
        <br />

        <label>
          LinkedIn:
          <input
            type="text"
            name="linkedin"
            value={formData.icons.linkedin}
            onChange={(e) => handleIconChange(e, "linkedin")}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MySelfAdmin;
