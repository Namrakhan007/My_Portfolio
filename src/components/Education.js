import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Education = () => {
  const educationDetails = [
    {
      institution: "Texas Tech University, Lubbock, TX",
      duration: "August 2024 – May 2026",
      degree: "Master’s of Computer Science",
      gpa: "3.86"
    },
    {
      institution: "Institute of Engineering and Science, IPS Academy",
      duration: "September 2020 – April 2024",
      degree: "Bachelor’s of Technology (Computer Science)",
      gpa: "3.56"
    }
  ];

  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Education</h2>
                  <div className="education-list">
                    {educationDetails.map((edu, index) => (
                      <div key={index} className="education-item">
                        <div className="education-header">
                            <h3>{edu.institution}</h3>
                            <span className="duration">{edu.duration}</span>
                        </div>
                        <h4>{edu.degree}</h4>
                        <div className="gpa-box">
                          <p>GPA: {edu.gpa}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
