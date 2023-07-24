import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

function CardExperience({ title, status }) {
  return (
    <article className="experience-details">
      <BsFillPatchCheckFill className="icon" />
      <div>
        <h4>{title}</h4>
        <small className="text-gray">{status}</small>
      </div>
    </article>
  );
}

export default CardExperience;
