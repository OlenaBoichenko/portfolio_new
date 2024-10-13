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
        <a href="https://drive.google.com/file/d/1IGpjWbKBJuZb6SgJ-HdO_OId11D2X9DE/view?usp=sharing" download="OlenaBoichenkoCV.pdf" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
};
