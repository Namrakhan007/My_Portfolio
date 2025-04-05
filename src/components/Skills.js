import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
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

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 style={{ color:"rgb(60, 54, 25)" }}>Skills</h2>
                        <p>Mastery is not a destination but a continuous journey of learning and improvement.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                            <div className="item">
                            <div className="circle-container" style={{ backgroundImage: "conic-gradient(#847713 0% 90%, #e0e0e0da 90% 100%)" }}>
                                    <div className="inner-circle">90%</div>
                                </div>
                                <h5 style={{ color:"rgb(60, 54, 25)" }}>Full Stack Developement</h5>
                            </div>
                            <div className="item">
                            <div className="circle-container" style={{ backgroundImage: "conic-gradient(#847713 0% 90%, #e0e0e0da 90% 100%)" }}>
                            <div className="inner-circle">90%</div>
                                </div>
                                <h5 style={{ color:"rgb(60, 54, 25)" }}>Data Structure and Algorithm</h5>                                </div>
                            <div className="item">
                            <div className="circle-container" style={{ backgroundImage: "conic-gradient(#847713 0% 87%, #e0e0e0da 87% 100%)" }}>
                                    <div className="inner-circle">87%</div>
                                </div>
                                <h5 style={{ color:"rgb(60, 54, 25)" }}>Artificial Intelligence Machine Learning</h5>
                            </div>
                            
                                
                            <div className="item">
                            <div className="circle-container" style={{ backgroundImage: "conic-gradient(#847713 0% 85%, #e0e0e0da 85% 100%)" }}>
                                    <div className="inner-circle">85%</div>
                                </div>
                                <h5 style={{ color:"rgb(60, 54, 25)" }}>Web Application</h5>
                            </div>

                            <div className="item">
                            <div className="circle-container" style={{ backgroundImage: "conic-gradient(#847713 0% 85%, #e0e0e0da 85% 100%)" }}>
                            <div className="inner-circle">85%</div>
                                </div>
                                <h5 style={{ color:"rgb(60, 54, 25)" }}> Software Project Management</h5>
                            </div>

                            <div className="item">
                            <div className="circle-container" style={{ backgroundImage: "conic-gradient(#847713 0% 80%, #e0e0e0da 80% 100%)" }}>
                                    <div className="inner-circle">80%</div>
                                </div>
                                <h5 style={{ color:"rgb(60, 54, 25)" }}>UI/UX Design</h5>
                            </div>

                            <div className="item">
                            <div className="circle-container" style={{ backgroundImage: "conic-gradient(#847713 0% 77%, #e0e0e0da 77% 100%)" }}>
                                    <div className="inner-circle">77%</div>
                                </div>
                                <h5 style={{ color:"rgb(60, 54, 25)" }}>Microsoft Tools</h5>
                            </div>
                         
                    
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
