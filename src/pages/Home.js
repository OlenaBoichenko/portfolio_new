import { Header } from "../components/header/Header";
import { Vanta } from "../vanta";

export const Home = () => {
  return (
    <>
      <Vanta />
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, ReactJS, Redux, Redux Toolkit, HTML/CSS, Git,
                BootStrap, MaterialUI, GSAP
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, MongoDB, Stripe</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};
