import React from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';
import { useHistory } from 'react-router-dom';

import { FiArrowLeft, FiPlus } from "react-icons/fi";

import logoImg from '../assets/mark.png';

import '../styles/pages/createCollectPoint.css';

const mapIcon = Leaflet.icon({ 
  iconUrl: logoImg,
  
  popupAnchor: [170, 20]
});

export default function CreateCollectPoint() {
  const { goBack } = useHistory();

  return (
    <div id="page-create-collect-point"> 
      <aside>
        <img src={logoImg} alt="Terê Agasalhado"/>

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#fff" />
          </button>
        </footer>
      </aside>

      <main>
        <form className="create-collect-point-form">
          <fieldset>
            <legend>Dados</legend>

            <Map center={[-22.4151909, -42.976899]} zoom={30} 
                style={{ width: '100%', height: 280 }}>
                  <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker interactive={false} icon={mapIcon} position={[-22.4151909, -42.976899]} />
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image"></div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de funcinamento</label>
              <input
                id="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">Sim</button>
                <button type="button">Não</button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}
