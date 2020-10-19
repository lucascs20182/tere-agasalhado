import React from "react";
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';

import logoImg from '../assets/mark.png';

function Landing() {
  return (
    <div id="page-landing">
      <div id="container">
        <header>
          <div className="logo animate-up">
            <img src={logoImg} alt="Logomarca do Terê Agasalhado" />
            <p>Terê Agasalhado</p>
          </div>

          <div className="location animate-up">
            <strong>Teresópolis</strong>
            <p>Rio de Janeiro</p>
          </div>
        </header>

        <main>
          <h1 className="animate-up">
            Seu coração pode aquecer Teresópolis. Doe roupas, cobertores e
            agasalhos.
          </h1>

          <section>
            <p className="animate-up">
              As doações serão entregues a moradores de rua, orfanatos e a casas
              de repouso para idosos.
            </p>

            <Link to="/app" title="Veja os pontos de coleta" className="visit animate-up">
              <FiArrowRight size={26} color="rgba(0, 0, 0, .6)" />
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Landing;
