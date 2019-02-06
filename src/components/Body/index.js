import React from 'react';
import { Container, BannerText, BannerButtons, Banner } from './styles';

const Body = () => (
  <Container>
    <Banner>
      <BannerText>O que não te desafia não te faz evoluir</BannerText>
      <BannerButtons>
        <button>Metodologia</button>
        <button>Planos</button>
      </BannerButtons>
    </Banner>
  </Container>
);

export default Body;