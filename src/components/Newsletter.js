import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      console.log("Sending email...");

      emailjs
        .send(
          "service_up09ozt", // Your Service ID
          "template_ygvlh5h", // Your Template ID
          { email },          // Pass email as parameter
          "_CIEF6JQ2xiyHb8Fv" // Your User ID
        )
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
            setEmail("");
          },
          (error) => {
            console.error("Email sending error:", error);
            console.error("Error details:", error.text); // Log full error
          }
        );
    } else {
      console.log("Invalid email address");
    }
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Stay Connected:</h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
