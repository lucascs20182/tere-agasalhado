import Leaflet from 'leaflet';

import logoImg from '../assets/mark.png';

const mapIcon = Leaflet.icon({ 
    iconUrl: logoImg,
    
    popupAnchor: [170, 20]
});

export default mapIcon;
