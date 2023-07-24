import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import Project from "./Project";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        <Project
          img={IMG1}
          github={"https://github.com/"}
          liveDemo={"https://dribbble.com/Alien_pixels"}
          title={"This is a portfolio item title"}
        />
        <Project
          img={IMG2}
          github={"https://github.com/"}
          liveDemo={"https://dribbble.com/Alien_pixels"}
          title={"This is a portfolio item title"}
        />
        <Project
          img={IMG3}
          github={"https://github.com/"}
          liveDemo={"https://dribbble.com/Alien_pixels"}
          title={"This is a portfolio item title"}
        />
        <Project
          img={IMG4}
          github={"https://github.com/"}
          liveDemo={"https://dribbble.com/Alien_pixels"}
          title={"This is a portfolio item title"}
        />
        <Project
          img={IMG5}
          github={"https://github.com/"}
          liveDemo={"https://dribbble.com/Alien_pixels"}
          title={"This is a portfolio item title"}
        />
        <Project
          img={IMG6}
          github={"https://github.com/"}
          liveDemo={"https://dribbble.com/Alien_pixels"}
          title={"This is a portfolio item title"}
        />
      </div>
    </section>
  );
};

export default Portfolio;
