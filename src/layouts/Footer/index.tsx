import * as C from "./style";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <C.Footer>
      <div className="icons">
        <a href="https://www.instagram.com/and.ssouzza/">
          <FaInstagramSquare />
        </a>
        <a href="https://www.linkedin.com/in/andressouzza/">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com/and.ssouzza/">
          <FaFacebookSquare />
        </a>
        <a href="https://github.com/andresouza2">
          <FaGithubSquare />
        </a>
      </div>
      <h2>André Souza© 2022</h2>
    </C.Footer>
  );
};

export default Footer;
