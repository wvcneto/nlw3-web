import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;

  .leaflet-container {
    z-index: 5;
  }
`;

export const Aside = styled.aside`
  width: 440px;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  p {
    line-height: 28px;
    margin-top: 24px;
  }
`;

export const Header = styled.header`

`;

export const MapMakerImage = styled.img`

`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  line-height: 24px;

  strong {
    font-weight: 800;
  }
`;

export const CreateButton = styled(LinkRouter)`
  position: absolute;
  right: 40px;
  bottom: 40px;
  width: 64px;
  height: 64px;
  background: #15c3d6;
  border-radius: 20px;
  z-index: 10;
  display: flex;  
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;

  &:hover {
    background: ${shade(0.2, '#15c3d6')};
  }
`;
