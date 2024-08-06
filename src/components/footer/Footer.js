import "./style.css";

import gitHub from "../../img/icons/gitHub.svg";
import linkedIn from "../../img/icons/linkedIn.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                href="https://github.com/OlenaBoichenko"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gitHub} alt="link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/olena-boichenko-dev"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIn} alt="link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© Olena Boichenko 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
