import React, { useEffect } from "react";
import postgreIMG from "../../assets/postgreeSQLIcon.png";
import tsIMG from "../../assets/tsIcon.png";
import springIMG from "../../assets/springIcon.svg";
import "./Habilidades.css";

function Habilidades() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showIcon"); // Adiciona a classe 'show' quando visível
        } else {
          entry.target.classList.remove("showIcon"); // Remove a classe 'show' quando não visível
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hiddenIcon");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="conteiner">
      <div id="habilidades" className="habilidade hiddenIcon">
        <h1>
          Minhas <strong>Habilidades</strong>
        </h1>
      </div>
      <div className="icon">
        <div className="icon-item hiddenIcon">
          <i className="fa-brands fa-java"></i>
          <h3>Java</h3>
        </div>
        <div className="icon-item hiddenIcon">
        <img src={springIMG}></img>
          <h3>Spring</h3>
        </div>
       
        <div className="icon-item hiddenIcon">
        <img src={postgreIMG}></img>
          <h3>PostgreSQL</h3>
        </div>
        <div className="icon-item hiddenIcon">
          <img src={tsIMG}></img>
          <h3>Typescript</h3>
        </div>
        <div className="icon-item hiddenIcon">
          <i className="fa-brands fa-react"></i>
          <h3>React</h3>
        </div>
        <div className="icon-item hiddenIcon">
          <i className="fa-brands fa-js"></i>
          <h3>JavaScript</h3>
        </div>
        <div className="icon-item hiddenIcon">
          <i className="fa-brands fa-css3-alt"></i>
          <h3>CSS</h3>
        </div>
        <div className="icon-item hiddenIcon">
          <i className="fa-brands fa-html5"></i>
          <h3>HTML</h3>
        </div>
        <div className="icon-item hiddenIcon">
          <i className="fa-brands fa-git-alt"></i>
          <h3>GitHub</h3>
        </div>
      </div>
    </div>
  );
}

export default Habilidades;
