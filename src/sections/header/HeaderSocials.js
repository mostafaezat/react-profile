import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a href="https;//linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https;//linkedin.com" target="_blank">
        <AiOutlineGithub />
      </a>
      <a href="https;//linkedin.com" target="_blank">
        <AiFillFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
