import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo">
        LOGO
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
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
      <hr />
      <div className="footer_copyright">
        <small>&#169; Mostafa ezzat. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
