import { useState, useEffect, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const bxRef = useRef(null);
  const [boxVisible, setBoxVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setBoxVisible(true); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    if (bxRef.current) observer.observe(bxRef.current);
    return () => observer.disconnect();
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const technicalSkills = [
    { name: "Java", percentage: 90 },
    { name: "OOps", percentage: 90 },
    { name: "Full Stack Development", percentage: 90 },
    { name: "Data Structure and Algorithm", percentage: 90 },
    { name: "Artificial Intelligence Machine Learning", percentage: 87 },
    { name: "Deep Learning", percentage: 85 },
    { name: "Web Application", percentage: 85 },
    { name: "Software Project Management", percentage: 85 },
    { name: "ReactJS", percentage: 80 },
    { name: "NodeJS", percentage: 70 },
    { name: "EJS", percentage: 60 },
    { name: "Microsoft Tools", percentage: 77 },
  ];

  const softSkills = [
    { name: "Communication Skills", percentage: 95 },
    { name: "Analytical Thinking", percentage: 87 },
    { name: "Problem Solving Skills", percentage: 85 },
    { name: "Leadership", percentage: 85 },
    { name: "Organization Skills", percentage: 90 },
  ];

  const SkillItem = ({ name, percentage }) => {
    const [currentPercentage, setCurrentPercentage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      let interval;
      if (isHovered) {
        setCurrentPercentage(0);
        interval = setInterval(() => {
          setCurrentPercentage((prev) => {
            if (prev < percentage) {
              return prev + 1;
            } else {
              clearInterval(interval);
              return percentage;
            }
          });
        }, 15);
      }
      return () => clearInterval(interval);
    }, [isHovered, percentage]);

    const containerStyle = {
      backgroundImage: isHovered 
        ? `conic-gradient(#847713 0% ${currentPercentage}%, #e0e0e0da ${currentPercentage}% 100%)`
        : 'none',
      transform: isHovered ? 'scale(0.95)' : 'scale(1)',
      transition: 'transform 0.3s ease-in-out'
    };

    return (
      <div 
        className="item skill-item-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="circle-container" style={containerStyle}>
          <div className="inner-circle">
            {isHovered ? currentPercentage : percentage}%
          </div>
        </div>
        <h5 className="skill-name">{name}</h5>
      </div>
    );
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div ref={bxRef} className={`skill-bx${boxVisible ? ' skill-bx--visible' : ''}`}>
                        <h2 className="skill-title skill-anim-item" style={boxVisible ? { animationDelay: '1.2s' } : {}}>Skills</h2>
                        <p className="skill-desc skill-anim-item" style={boxVisible ? { animationDelay: '1.5s' } : {}}>Mastery is not a destination but a continuous journey of learning and improvement.</p>

                        <h3 className="skill-subtitle skill-anim-item" style={boxVisible ? { animationDelay: '1.8s' } : {}}>Technical Skills</h3>
                        <div className="skill-anim-item" style={boxVisible ? { animationDelay: '2.1s' } : {}}>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                              {technicalSkills.map((skill, index) => (
                                  <SkillItem key={index} name={skill.name} percentage={skill.percentage} />
                              ))}
                          </Carousel>
                        </div>

                        <h3 className="skill-subtitle skill-anim-item" style={boxVisible ? { animationDelay: '2.4s' } : {}}>Soft Skills</h3>
                        <div className="skill-anim-item" style={boxVisible ? { animationDelay: '2.7s' } : {}}>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                              {softSkills.map((skill, index) => (
                                  <SkillItem key={index} name={skill.name} percentage={skill.percentage} />
                              ))}
                          </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
