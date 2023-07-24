import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header className="container header-container">
      <h5>Hello I am</h5>
      <h1>Mostafa Ezzat</h1>
      <h5>Frontend Developer</h5>
      <CTA />
      <HeaderSocials />
      <div className="me">
        <img src={ME} alt="me" />
      </div>
    </header>
  );
};

export default Header;
