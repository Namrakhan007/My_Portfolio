import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { PlusCircle, DashCircle } from 'react-bootstrap-icons';

export const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const experienceDetails = [
    {
      role: "TA Graduate Assistant",
      company: "Rawls College of Business, TTU (Management Department)",
      duration: "May 2025 – Current",
      description: [
        "Served as the technical partner to non-technical faculty stakeholders — listening to operational pain points, translating them into automation solutions, and delivering working Python pipelines that eliminated manual effort in weekly reporting workflows. The same partnership model OpenSesame's AI Champions program relies on.",
        "Built reusable automation scripts for data processing (CSV cleanup, section merges, rubric-score aggregation) with validation and de-duplication checks — designed to run reliably every week without manual intervention, demonstrating the operational consistency expected of production automation systems.",
        "Documented all automation workflows clearly so non-technical users could understand outputs and act on them confidently."
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
    },
    {
      role: "Web Developer Intern",
      company: "Cylsys Software Solution Pvt Ltd, Mumbai, India",
      duration: "Feb 2022 – Apr 2022",
      description: [
        "Built full-stack web applications using Node.js, React.js, and MySQL — designing database schemas, integrating REST APIs, and delivering end-to-end digital solutions; collaborated with product stakeholders to translate requirements into working features.",
        "Performed database maintenance and normalization for the Online Healthcare Management System — structuring patient data across relational tables to eliminate redundancy, ensure data integrity, and improve accessibility; documented the schema design and communicated data structure decisions clearly to the product team."
      ]
    }
  ];

  const toggleExperience = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="experience" id="experience" ref={sectionRef}>
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Experience</h2>
              <div className="experience-list">
                {experienceDetails.map((exp, index) => {
                  const fromLeft = index % 2 === 0;
                  const slideClass = visible
                    ? `exp-slide-in ${fromLeft ? 'exp-from-left' : 'exp-from-right'}`
                    : `exp-slide-hidden ${fromLeft ? 'exp-offscreen-left' : 'exp-offscreen-right'}`;
                  return (
                    <div
                      key={index}
                      className={`experience-item ${expandedIndex === index ? 'expanded' : 'collapsed'} ${slideClass}`}
                      style={{ animationDelay: visible ? `${index * 0.2}s` : '0s' }}
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
                    );
                  })}
                </div>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
