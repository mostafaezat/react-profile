import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward, FaUsers } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container-about container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={ME} />
          </div>
        </div>
        <div className="about-content">
          <div className="card-container">
            <article className="card-about">
              <h1>
                <FaAward />
              </h1>
              <h3>Experience</h3>
              <small>3+Years Working</small>
            </article>
            <article className="card-about">
              <h1>
                <FaUsers />
              </h1>
              <h3>Clients</h3>
              <small>200+ Worldwide</small>
            </article>
            <article className="card-about">
              <h1>
                <AiOutlineFundProjectionScreen />
              </h1>
              <h3>Projects</h3>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Reprehenderit culpa magna anim deserunt Lorem Dolor eiusmod occaecat
            incididunt elit cupidatat dolor anim Dolor elit nulla nostrud
            pariatur. Consectetur ut exercitation veniam exercitation enim ea
            Reprehenderit culpa magna anim deserunt Lorem Dolor eiusmod occaecat
          </p>
          <a href="#contact" className="btn btn-primary">
            Let us Took
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
