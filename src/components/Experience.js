import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { PlusCircle, DashCircle } from 'react-bootstrap-icons';

export const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const experienceDetails = [
    {
      role: "TA Graduate Assistant",
      company: "Rawls College of Business, TTU (Management Department)",
      duration: "May 2025 – Current",
      description: [
        "Graded assignments, quizzes, and projects with accuracy and timely feedback.",
        "Assisted students and the professor with technical issues related to RaiderCanvas, course tools, and learning platforms.",
        "Performed data analysis for course performance, grade distribution, and student progress tracking.",
        "Conducted quality assurance checks on academic materials, ensuring accuracy, clarity, and usability.",
        "Managed course announcements, updates, and communication to maintain smooth course flow.",
        "Helped troubleshoot software, login issues, and digital submissions for students."
      ]
    },
    {
      role: "Tutor",
      company: "Marsha Sharp Center for Student-Athletics, Texas Tech University, Lubbock, Texas",
      duration: "Dec 2024 – June 2025",
      description: "I mentor and help athelete students in the courses like Mathematics, Applied chemistry, Physics-| & ||, Engineering Seminar, Data structure, general tutoring, leadership & communication. To me, tutoring isn’t just about solving problems; it’s about unveiling the beauty within them. Each concept is a door to understanding the world, and I help students find the keys."
    },
    {
      role: "Software Developer Intern",
      company: "Rakuten Symphony, Indore, India",
      duration: "August 2023 – November 2023",
      description: [
        "Contributed to full-stack development, integrated frontend, backend, Rest API and database components, while ensuring data integrity and system reliability.",
        "Optimized development workflows by conducting code reviews, regression, and acceptance testing, reducing post-deployment defects by 40%."
      ]
    }
  ];

  const toggleExperience = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Experience</h2>
                  <div className="experience-list">
                    {experienceDetails.map((exp, index) => (
                      <div 
                        key={index} 
                        className={`experience-item ${expandedIndex === index ? 'expanded' : 'collapsed'}`}
                        onClick={() => toggleExperience(index)}
                      >
                        <div className="experience-header" style={{ paddingBottom: '50px' }}>
                            <h3>{exp.role}</h3>
                            <span className="toggle-icon">
                              {expandedIndex === index ? <DashCircle size={25} /> : <PlusCircle size={25} />}
                            </span>
                        </div>
                        
                        <div className="experience-content">
                          <div className="content-inner">
                            <h4>{exp.company}</h4>
                            <span className="duration-badge">{exp.duration}</span>
                            <div className="description-box">
                              {Array.isArray(exp.description) ? (
                                <ul>
                                  {exp.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                  ))}
                                </ul>
                              ) : (
                                <p>{exp.description}</p>
                              )}
                            </div>
                          </div>
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
