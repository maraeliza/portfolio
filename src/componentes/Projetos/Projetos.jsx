import { useEffect, useState } from "react";

import "./Projetos.css";

function Projetos() {
  const [popupVisible, setPopupVisible] = useState(false);

  const [popupDescription, setPopupDescription] = useState("");

  const listaProjetos = [
    {
      linkRepositorio: "https://github.com/maraeliza/evogym",
      linkDeploy: "https://maraeliza.github.io/evogym/",
      nome: "EvoGym",
      descricao:
        "Este projeto consiste no desenvolvimento de uma landing page simples e funcional para uma academia, utilizando React. O objetivo é criar uma página leve, rápida e fácil de navegar, com foco em promover a academia e facilitar o contato com os clientes.",
     
      habilidades: ["React", "TypeScript", "Vite"],
    },
    {
      linkRepositorio: "https://github.com/maraeliza/medicavita",
      linkDeploy: "https://maraeliza.github.io/medicavita/",
      nome: "MedicaVita",
      descricao:
        "Este projeto consiste no desenvolvimento de uma landing page moderna e funcional para a clínica MedicaVita, utilizando React, TypeScript e configurado com Vite para garantir alta performance e carregamento rápido. O objetivo é criar uma página leve, segura e intuitiva, focada em apresentar os serviços da clínica, transmitir confiança aos pacientes e facilitar o agendamento de consultas. A interface é projetada para oferecer uma experiência agradável e responsiva, destacando as especialidades médicas, a equipe de profissionais e as informações de contato, reforçando o compromisso com a saúde e bem-estar dos pacientes.",
     
      habilidades: ["React", "TypeScript", "Vite"],
    },
    {
      linkRepositorio: "https://github.com/maraeliza/smart-diet",
      linkDeploy: "https://maraeliza.github.io/smart-diet/",
      nome: "SmartDiet",
      descricao:
        "SmartDiet é uma plataforma integrada que ajuda pessoas a adotarem hábitos mais saudáveis por meio de planejamento alimentar personalizado, monitoramento de refeições e dicas de bem-estar. Com recomendações baseadas no perfil e objetivos do usuário, o SmartDiet torna a jornada rumo a uma vida equilibrada simples, acessível e motivadora.",
      
      habilidades: ["React", "JavaScript", "Bootstrap"],
    },
    {
      linkRepositorio: "https://github.com/maraeliza/ModeloFacil",
      linkDeploy: "https://maraeliza.pythonanywhere.com/",
      nome: "ModeloFacil",
      descricao:
        "O site ModeloFacil serve para facilitar o envio de emails dentro de uma empresa. Ele permite a utilização de templates customizados e inserção de dados para a construção dos emails",
      
      habilidades: ["Python","Flask", "FirebaseNoSQL","jQuery", "JavaScript", "Bootstrap", "HTML", "CSS"],
    },
    {
      linkRepositorio: "",
      linkDeploy: "https://ecomerce-homolog.cartaocbx.com.br/",
      nome: "CBXPremium",
      descricao:
        "O site CBX Premium é um site voltado os para serviços e benefícios do Cartão CBX para os servidores públicos.",
      
      habilidades: ["React", "TypeScript", "Next.js", "Tanstack Query"],
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showCards"); 
        } else {
          entry.target.classList.remove("showCards"); 
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hiddenCards");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  const togglePopup = (index) => {
    setPopupDescription(listaProjetos[index].descricao); 
    setPopupVisible(!popupVisible); 
  };

  return (
    <div className="geralProjetos hiddenCards projetos">
      <div className="tituProjetos">
        <h1>
          Meus <strong>Projetos</strong>
        </h1>
      </div>

      <div className="grid--container hiddenCards">
        {listaProjetos.map((projeto, index) => (
          
          <div key={`${projeto.nome}-${index.toString()}`} className="grid--cell">
            <article className="grid--item">
              <div className="preview--container">
                <a
                  href={projeto.linkDeploy}
                  target="_blank"
                >
                  <div className={`preview-image ${projeto.nome.toLowerCase()} efeito`}></div>
                </a>
              </div>

              <div className="content--container hiddenCards">
                <div className="title--container">
                  <a
                    className="title--text"
                    href={projeto.linkDeploy}
                  >
                    Projeto - {projeto.nome}
                  </a>
                </div>

                <div className="tags--overflow-container">
                  <div className="conteiner-slide">
                    <div className="paginas-slide">
                      {projeto.habilidades.map((habilidade, i) => (
                        <span key={i.toString()}>{habilidade}</span>
                      ))}
                      {projeto.habilidades.map((habilidade, i) => (
                        <span key={i.toString()}>{habilidade}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hover--options">
                  {projeto.linkRepositorio.length > 2 && (

                  <a
                    href={projeto.linkRepositorio}
                    className="Repositório button"
                  >
                    <span className="icon-title">
                      <i className="fad fa-books"></i> Repositório
                    </span>
                    <span className="new-tab">
                      <i className="fas fa-arrow-circle-right"></i>
                    </span>
                  </a>
                  )}

                  <a href={projeto.linkDeploy} className="Deploybutton">
                    <span className="icon-title">
                      <i className="far fa-image"></i> Deploy
                    </span>
                    <span className="new-tab">
                      <i className="fas fa-arrow-circle-right"></i>
                    </span>
                  </a>

                  <button
                    className="follow button"
                    onClick={() => togglePopup(index)}
                  >
                    <i className="fa-solid fa-circle-info"></i>
                  </button>
                </div>
              </div>
            </article>
          </div>
        ))}

        {/* Popup - Modal */}
        {popupVisible && (
          <div className="popup-overlay">
            <div className="popup">
              <h2>Informações do Projeto</h2>
              <p>{popupDescription}</p>
              <button
                className="close-popup"
                onClick={() => setPopupVisible(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projetos;
