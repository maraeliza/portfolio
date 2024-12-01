import React, { Component } from 'react';
import { Link } from 'react-scroll';  // Importa o Link do react-scroll
import "./NavbarStyles.css";
import logo from '../Navbar/logo-fac.png';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav>
          <div className="logo">
            <img className="img-logo" src={logo} alt="Logo" />
            <a href="index.html">
              Mara <span className="oliveira">Eliza</span>
            </a>
          </div>

          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <Link 
                  to="home" 
                  smooth={true} 
                  duration={500} 
                  className="efeito"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="habilidades" 
                  smooth={true} 
                  duration={500} 
                  className="efeito"
                >
                  Habilidades
                </Link>
              </li>
              <li>
                <Link 
                  to="sobre" 
                  smooth={true} 
                  duration={500} 
                  className="efeito"
                >
                  Sobre mim
                </Link>
              </li>
            
              <li>
                <Link 
                  to="projetos" 
                  smooth={true} 
                  duration={500} 
                  className="efeito"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link 
                  to="contato" 
                  smooth={true} 
                  duration={500} 
                  className="efeito"
                >
                  Me Contrate
                </Link>
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
