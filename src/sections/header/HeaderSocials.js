import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a href="https://Linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://Github.com" target="_blank" rel="noreferrer">
        <AiOutlineGithub />
      </a>
      <a href="https://Facebook.com" target="_blank" rel="noreferrer">
        <AiFillFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
