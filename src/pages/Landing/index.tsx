import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { 
  Container, 
  ContentWrapper, 
  LogoImage,
  Content,
  Location,
  Button
} from './styles';

import logo from '../../images/logo.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <LogoImage src={logo} alt="happy" />

        <Content>
          <h1>Leve felicidade para o mundo.</h1>
          <p>
            Visite orfanatos e mude o dia de muitas crianças.
          </p>
        </Content>

        <Location>
          <strong>Araguari</strong>
          <span>Minas Gerais</span>
        </Location>

        <Button to="/app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Button>

      </ContentWrapper>
    </Container>
  );
}

export default Landing;
