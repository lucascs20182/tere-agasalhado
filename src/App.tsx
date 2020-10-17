import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import './styles/global.css';
import './styles/animations.css';
import './styles/pages/landing.css';

import logoImg from './assets/mark.png';

function App() {
  return (
    <div id="page-landing">
      <div id="content-wrapper">
        <header>
          <div className="logo animate-up">
            <img src={logoImg} alt="Logomarca do Terê Agasalhado" />
            <p>Terê Agasalhado</p>
          </div>

          <div className="location animate-up">
            <strong>Teresópolis</strong>
            <span>Rio de Janeiro</span>
          </div>
        </header>

        <main>
          <h1 className="animate-up">
            Seu coração pode aquecer Teresópolis. Doe roupas, cobertores e agasalhos.
          </h1>
          
          <section>
            <p className="animate-up">
              As doações serão entregues a moradores de rua, orfanatos 
              e a casas de repouso para idosos.
            </p>

            <a href="#" title="Veja os pontos de coleta"
              className="enter-app animate-up">
              <FiArrowRight size={26} color="rgba(0, 0, 0, .6)" />
            </a>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
