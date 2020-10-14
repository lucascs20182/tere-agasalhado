import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import './styles/global.css';
import './styles/pages/landing.css';

import logoImg from './assets/mark.png';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <div className="logo">
          <img src={logoImg} alt="" />
          <p>Terê Agasalhado</p>
        </div>

        <main>
          <h1>Seu coração pode aquecer Teresópolis. Doe roupas, cobertores e agasalhos.</h1>
          <p>
            As doações serão entregues a moradores de rua, orfanatos 
            e a casas de repouso para idosos.
          </p>
        </main>

        <div className="location">
          <strong>Teresópolis</strong>
          <span>Rio de Janeiro</span>
        </div>

        
        <a href="" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, .6)" />
        </a>
        
      </div>
    </div>
  );
}

export default App;
