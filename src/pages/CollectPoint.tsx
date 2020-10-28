import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo, FiArrowLeft } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useHistory } from 'react-router-dom';
import Leaflet from 'leaflet';

import logoImg from '../assets/mark.png';

import '../styles/pages/collectPoint.css';

const mapIcon = Leaflet.icon({ 
  iconUrl: logoImg,
  
  popupAnchor: [170, 20]
});

export default function CollectPoint() {
  const { goBack } = useHistory();

  return (
    <div id="page-collect-point">
      <aside>
        <img src={logoImg} alt="Terê Agasalhado"/>

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#fff" />
          </button>
        </footer>
      </aside>

      <main>
        <div className="collect-point-details">
          <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar Tia Anastácia" />

          <div className="images">
              <button className="active" type="button">
                <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar Tia Anastácia" />
              </button>
              <button className="active" type="button">
                <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar Tia Anastácia" />
              </button>
              <button className="active" type="button">
                <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar Tia Anastácia" />
              </button>
              <button className="active" type="button">
                <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar Tia Anastácia" />
              </button>
              <button className="active" type="button">
                <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar Tia Anastácia" />
              </button>
              <button className="active" type="button">
                <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar Tia Anastácia" />
              </button>
          </div>

          <div className="collect-point-details-content">
            <h1>Lar Tia Anastácia</h1>
            <p>
              Centro de Atenção e Serviço a Criança e a Família. 
              Somos uma ONG sem fins lucrativos trabalhando com crianças.
            </p>

            <div className="map-container">
              <Map center={[-22.4151909, -42.976899]} zoom={30} 
                style={{ width: '100%', height: 280 }} dragging={false}
                touchZoom={false} zoomControl={false} 
                scrollWheelZoom={false} doubleClickZoom={false}>
                  <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker interactive={false} icon={mapIcon} position={[-22.4151909, -42.976899]} />
              </Map>

              <footer>
                <a href="">Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>
              Os agasalhos serão recebidos na recepção, 
              é só falar com a moça por trás do balcão quando chegar.
            </p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                de 8h às 18h
              </div>
              <div className="open-on-weekends">
                <FiInfo size={32} color="#39CC83" />
                Atendemos <br />
                no fim de semana
              </div>
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button> 
          </div>
        </div>
      </main>
    </div>
  );
}
