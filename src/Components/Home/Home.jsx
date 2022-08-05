import React from "react";
import mac from "../../assets/i.webp";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container-header">
        <div className="header-text" id="header-go">
          <h1>
            ESSENTIAL READING <br />
            TEEN SPIDER-MAN
          </h1>
          <button id="header-btn">Начать сейчас</button>
          <p>
            Featuring adolescent Spidey! At age fifteen, Peter Parker of Queens
            became <br /> New York City’s web-slinging defender. Inheriting a
            spider’s strength <br />
            (and responsibility beyond his years), Spider-Man grew into his
            heroism before <br /> readers’ eyes. Read our favorite teenaged
            turns here!
          </p>
        </div>
        <div className="header-mac">
          <img id="mac" src={mac} alt="BG2" />
        </div>
      </div>
    </>
  );
};

export default Home;
