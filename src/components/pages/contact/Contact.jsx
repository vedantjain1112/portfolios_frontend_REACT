import "./Contact.scss";
import { Link } from "react-router-dom";

export default function Contact() {
  const curr_user = "jainvedant1211@gmail.com";
  const email_id = "example@gmail.com";
  const email_subject = "Sample Subject";
  const email_from = "sender@example.com";
  const email_body = "This is the email body.";

  return (
    <>
      <div className="containerContact">
        <div className="em_row em_widget_container">
          <div className="bg_row bg_row_first dark_row">
            <div className="em_row em-header-container">
              <div className="em_header_left_col">
                <img
                  className="em-gmail-logo"
                  src="https://img.freepik.com/premium-psd/gmail-icon-3d-render_68185-1104.jpg?size=626&ext=jpg&ga=GA1.1.943521804.1696179012&semt=sph"
                  alt="Gmail Logo"
                />
              </div>
              <div className="em_header_right_col">
                <p
                  className="em-widget-header-text"
                  style={{
                    fontSize: "16px",
                  }}
                >
                  {curr_user}
                </p>
              </div>
            </div>
          </div>
          <div className="email_inner_container">
            <div className={`bg_row row_css_here`}>
              <div className="em_row">
                <Link
                  className="widget-link"
                  to={`https://mail.google.com/mail/u/${curr_user}/#inbox/${email_id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="emailsWidget em_mainContainer even-element">
                    <div className="em_row">
                      <div className="emailsWidget em_col_50">
                        <p className="email-title email-text">
                          Subject: {email_subject}
                        </p>
                      </div>
                      <div className="emailsWidget em_col_50">
                        <p className="email-title email-text from-text">
                          - {email_from}
                        </p>
                      </div>
                    </div>
                    <div className="em_row em_row_separator">
                      <div className="emailsWidget">
                        <p className="email-body email-text">{email_body}</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <a
                  className="widget-link"
                  href={`mailto:${curr_user}?subject=${encodeURIComponent(
                    email_subject
                  )}&body=${encodeURIComponent(email_body)}`}
                  style={{
                    color: "#fff",
                    fontSize: "20px",
                    textDecoration: "none",
                    textDecorationLine: "none",
                  }}
                >
                  Send Mail 📧
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
