import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/profanity_filter.png";
import projImg2 from "../assets/img/RAG.png";
import projImg3 from "../assets/img/weather.png";
import projImg4 from "../assets/img/snakeGame.png";
import projImg5 from "../assets/img/Daily Journal.png";
import projImg6 from "../assets/img/drumkit..png";
import projImg7 from "../assets/img/AIvsHuman.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";

export const Projects = () => {

  // Tab 1 projects
  const mainProjects = [
    {
      title: "KITTI Visual Localization and Trajectory Estimation",
      description: "Computer Vision & Deep Learning",
      imgUrl: "https://cdn.prod.website-files.com/60b5ddc843f85816ad55997c/67f4e271a7ce20d56bd11732_AD_4nXewSC16KrTlvQbu5ySU3skVzjXa-WfykoehqiztrAO_R00ZhjNJJ9n5AWXCNJKzRNOXbfLQZXTKYyPLAR271vfRFHUJfoErrP7OZa1yCGu5s4GAvr8lkMemYH4FGHy5FvaDvqnY.png",
      link: "https://github.com/Namrakhan007/KITTI_Visual_Localization-Trajectory_Estimation/tree/main/project_root",
    },
    {
      title: "ML Classifier Web Application",
      description: "Machine and Deep Learning Classification Web Application with Streamlit",
      imgUrl: projImg7,
      link:"https://github.com/Namrakhan007/AI_vs_Human_Text_Detection",
    },
    {
      title: "Profinity Detection",
      description: "NLP, Bert & Transformers And NextJS",
      imgUrl: projImg1,
      link: "https://github.com/profanity-filter-2024/dl-model", 
    },
    {
      title: "RAG Model",
      description: "LLM Model",
      imgUrl: projImg2,
      link: "https://github.com/Namrakhan007/RAG_MODEL",
    },
    {
      title: "Whether Forcasting Application",
      description: "ReactJS And API Integration",
      imgUrl: projImg3,
      link: "https://github.com/Namrakhan007/weather_forcasting",
    },
    {
      title: "My Daily Journal",
      description: "NodeJS & ExpressJS",
      imgUrl: projImg5,
      link:"https://github.com/Namrakhan007/Daily_journal"
    },
  ];

  // Tab 2 projects (games)
  const gameProjects = [
    {
      title: "Snake Game",
      description: "using Python",
      imgUrl: projImg4,
      link:"https://github.com/Namrakhan007/Python-Project/tree/main/snake_game",
    },
    {
      title: "Drum Kit Band",
      description: "Using HTML, CSS, JavaScript and Bootstrap",
      imgUrl: projImg6,
      link:"https://github.com/Namrakhan007/drumKitBand",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>As Web Developer Lead at the Google Developer Student Club during my undergrad, I led a team organizing tech events, workshops, and hackathons...</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    
                    {/* Tab 1 */}
                    <Tab.Pane eventKey="first">
                      <Row>
                        {mainProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    {/* Tab 2 */}
                    <Tab.Pane eventKey="second">
                      <Row>
                        {gameProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    {/* Tab 3 */}
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}



// export const Projects = () => {

//   const projects = [
//     {
//       title: "ML CLassifier Web Application",
//       description: "Machine and Deep Learning Classification Web Application with Streamlit",
//       imgUrl: projImg7,
//       link:"https://github.com/Namrakhan007/AI_vs_Human_Text_Detection",
//     },
//     {
//       title: "Profinity Detection",
//       description: "NLP, Bert & Transformers And NextJS",
//       imgUrl: projImg1,
//       link: "https://github.com/profanity-filter-2024/dl-model", 
//     },
//     {
//       title: "RAG Model",
//       description: "LLM Model",
//       imgUrl: projImg2,
//       link: "https://github.com/Namrakhan007/RAG_MODEL",
//     },
//     {
//       title: "Whether Forcasting Application",
//       description: "ReactJS And API Integration",
//       imgUrl: projImg3,
//       link: "https://github.com/Namrakhan007/weather_forcasting",
//     },
//     {
//       title: "Snake Game",
//       description: "using Python",
//       imgUrl: projImg4,
//       link:"https://github.com/Namrakhan007/Python-Project/tree/main/snake_game",
//     },
//     {
//       title: "My Daily Journal",
//       description: "NodeJS & EXpressJS",
//       imgUrl: projImg5,
//       link:"https://github.com/Namrakhan007/Daily_journal"
//     },
//     {
//       title: "Drum Kit Band",
//       description: "Using HTML, CSS, JavaScript and Bootstrap",
//       imgUrl: projImg6,
//       link:"https://github.com/Namrakhan007/drumKitBand",
//     },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
//                 <h2>Projects</h2>
//                 <p>As Web Developer Lead at the Google Developer Student Club during my undergrad, I led a team organizing tech events, workshops, and hackathons in areas like App Development, Machine Learning, Cloud Computing, Cybersecurity, Blockchain, and Event Management. I also contributed to the design and maintenance of the club's website, collaborating on real-world problem-solving with Google technologies while fostering team and personal growth.</p>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="first">Tab 1</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="third">Tab 3</Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                   <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                     <Tab.Pane eventKey="first">
//                       <Row>
//                         {
//                           projects.map((project, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...project}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="section">
//                       <div>
//                         <h3>Hello </h3></div>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="third">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2}></img>
//     </section>
//   )
// }
