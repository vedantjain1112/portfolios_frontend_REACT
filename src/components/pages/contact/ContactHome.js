import Contact from "../contact/Contact";
import Navbar from "../../header/Navbar";

function ContactHome() {
  return (
    <>
      <Navbar />
      <div
        className="contactdiv"
        style={{
          marginTop: "100px",
        }}
      >
        <Contact />
      </div>
    </>
  );
}

export default ContactHome;
