import "./style.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Olena</em>
          </strong>
          <br />I am your web developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a
          href="./Olena_Boichenko_CV.pdf"
          download="Olena_Boichenko_CV.pdf"
          className="btn"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};
