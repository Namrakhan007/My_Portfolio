import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/me.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Engineer", "Frontend Developer", "Machine Learning Engineer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">

      <Container>
 
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1 style={{ color:"rgb(104, 93, 38)" }}>{"Hi!! I'm Namra Khan"} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer", "Frontend Developer", "Machine Learning Engineer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Believing in the power of limitless potential, I always push beyond boundaries, reminding myself that "you never know how far you can go until you try." With advanced skills in Problem Solving, machine learning and full-stack development,  I create impactful, scalable solutions that drive innovation. As a motivational speaker and a lifelong learner, I embrace every opportunity to grow, knowing that learning and self-improvement never stop. Every challenge is a chance to evolve, and I strive to excel in both my personal and professional journey.</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className="myimg" src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>

        </Row>
        
      </Container>
    {/* Download Resume Section */}
  <div style={{
    display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "30px"
  }}>
    <h4 className="resume-title" style={{ fontWeight:"bolder", fontSize:"50px" }}>Download My Resume</h4>
<a href="https://drive.google.com/file/d/1aa9LSQf6VciBDciMa4DF16c77OhjLih_/view?usp=sharing" download="Namra_Khan_Resume.pdf" style={{ textDecoration: 'none' }}>
  <button className="resume-download-btn" style={{
    padding: "10px 20px", fontSize: "16px", backgroundColor: "#FFEB3B", color: "white", border: "none", borderRadius: "10px",
    cursor: "pointer", boxShadow: "0 4px 6px rgba(255, 255, 255, 0.5), 0 4px 10px rgba(240, 229, 135, 0.6)", transition: "all 0.3s ease"
  }}>
    Download Resume
  </button>
</a>
  </div>

  {/* Wave transition into Skills section — lives at the bottom of Banner */}
  <div className="banner-wave-bottom" aria-hidden="true">
    <svg className="wave-svg wave-svg--1" viewBox="0 0 2880 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,110 C240,40 480,148 720,90 C960,32 1200,130 1440,88 C1680,44 1920,140 2160,88 C2400,34 2640,138 2880,88 L2880,160 L0,160 Z" fill="#aa9635" opacity="0.55"/>
    </svg>
    <svg className="wave-svg wave-svg--2" viewBox="0 0 2880 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,80 C240,148 480,24 720,80 C960,148 1200,22 1440,80 C1680,148 1920,22 2160,80 C2400,148 2640,22 2880,80 L2880,160 L0,160 Z" fill="#c8b040" opacity="0.7"/>
    </svg>
    <svg className="wave-svg wave-svg--3" viewBox="0 0 2880 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,100 C200,38 400,148 640,90 C880,32 1100,138 1440,95 C1780,48 1980,148 2160,95 C2340,40 2640,145 2880,95 L2880,160 L0,160 Z" fill="#f9edad" opacity="0.92"/>
    </svg>
  </div>

    </section>
  )
}
