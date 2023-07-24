import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import CardExperience from "./CardExperience";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <CardExperience title={"HTML"} status={"Experienced"} />
            <CardExperience title={"css"} status={"Experienced"} />
            <CardExperience title={"JavaScript"} status={"Experienced"} />
            <CardExperience title={"Bootstrap"} status={"Experienced"} />
            <CardExperience title={"React.JS"} status={"Experienced"} />
            <CardExperience title={"Redux"} status={"Experienced"} />
          </div>
        </div>
        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            <CardExperience title={"python"} status={"Experienced"} />
            <CardExperience title={"postSQL"} status={"Experienced"} />
            <CardExperience title={"Django"} status={"Experienced"} />
            <CardExperience title={"REST API"} status={"Experienced"} />
            <CardExperience title={"Git"} status={"Experienced"} />
            <CardExperience title={"postman"} status={"Experienced"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
