import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import logoImg from '../assets/mark.png';

import '../styles/pages/collectPoints.css';

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

            <Map center={[-22.4151909, -42.976899]} zoom={15} 
                style={{ width: '100%', height: '100%' }}>
                    <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to="" className="create-collect-point" title="Cadastre um ponto de coleta">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}

export default CollectPoints;
