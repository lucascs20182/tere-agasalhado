import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import logoImg from '../assets/mark.png';

import '../styles/pages/collectPointsMap.css';

const mapIcon = Leaflet.icon({ 
    iconUrl: logoImg,
    
    popupAnchor: [170, 20]
});

function CollectPoints() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={logoImg} alt="Logomarca do Terê Agasalhado" />

                    <h2>Escolha um ponto de coleta no mapa</h2>
                    <p>Muitas pessoas estão esperando a sua doação.</p>
                </header>
                <footer>
                    <strong>Teresópolis</strong>
                    <span>Rio de Janeiro</span>
                </footer>
            </aside>

            <Map center={[-22.4151909, -42.976899]} zoom={30} 
                style={{ width: '100%', height: '100%' }}>
                    <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    <Marker icon={mapIcon} position={[-22.4151909, -42.976899]}>
                        <Popup closeButton={false} minWidth={240} maxWidth={240} 
                            className="map-popup">
                                Lar das Meninas
                                <Link to="/collectpoints/1">
                                    <FiArrowRight size={20} color="#fff" />
                                </Link>
                        </Popup>
                    </Marker>
            </Map>

            <Link to="/collectpoints/create" className="create-collect-point" title="Cadastre um ponto de coleta">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}

export default CollectPoints;
