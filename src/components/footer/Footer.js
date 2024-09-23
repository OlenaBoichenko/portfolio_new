import "./style.css";

import gitHub from "../../img/icons/gitHub.svg";
import linkedIn from "../../img/icons/linkedIn.svg";
import mainskillone from "../../img/icons/mainskillone.svg";

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
          <div>
          <a href="https://freelancehunt.com/freelancer/Olena_dev.html?from=shield&r=ooAyy" target="_blank" rel="noreferrer"><img src={mainskillone} alt="Freelancehunt — простой и честный фриланс" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
