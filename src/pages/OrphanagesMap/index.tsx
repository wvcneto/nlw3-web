import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarker from '../../images/map-marker.svg';

import { 
  Container, 
  Aside,
  Header, 
  MapMakerImage, 
  Footer,
  CreateButton
} from './styles';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <Aside>
        <Header>
          <MapMakerImage src={mapMarker} />

          <h2>Escolha um orfanato no mapa.</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </Header>

        <Footer>
          <strong>Araguari</strong>
          <span>Minas Gerais</span>
        </Footer>
      </Aside>
      <Map 
        center={[-18.637291,-48.1896161]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>
      <CreateButton to="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </CreateButton>
    </Container>
  );
}

export default OrphanagesMap;
