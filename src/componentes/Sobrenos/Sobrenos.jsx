import React, { useEffect } from "react";
import "./Sobrenos.css";
import imgprofile from "./imgprofile.png"; // Ajuste o caminho para a pasta correta

function Sobrenos() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden ");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div id="sobre" className="conteiner-geral">
      <div className="imgProfilePerfil">
        <img className="Imgprofile hidden" src={imgprofile} alt="Profile" />
      </div>
      <div className="sobremim">
        <div className="DivText hidden">
          <h1>Sobre mim</h1>
        </div>
        <div className="DivText hidden">
          Programadora apaixonada por tecnologia e inovação, com experiência em
          desenvolvimento de sistemas web e mobile. Com habilidades em <b>Java</b>,{" "}
          <b>Spring</b>, <b>Hibernate</b>, <b>SQL</b>, <b>React</b> e{" "}
          <b>TypeScript</b>, focada na entrega de soluções eficazes e na
          melhoria contínua da experiência do usuário.
        </div>
        <div className="DivText hidden">
          Com forte compromisso com boas práticas, como testes automatizados,
          integração contínua e arquitetura escalável, busco sempre aliar
          eficiência, qualidade e inovação no desenvolvimento de produtos
          digitais.
        </div>
      </div>
    </div>
  );
}

export default Sobrenos;
