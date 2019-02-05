import React from 'react';
import { Container, BannerText, BannerButtons, Banner } from './styles';
import { Button } from 'components/elements';

const Body = () => (
  <Container>
    <Banner>
      <BannerText>O que não te desafia não faz você mudar</BannerText>
      <BannerButtons>
        <button>Metodologia</button>
        <button>Planos</button>
      </BannerButtons>
    </Banner>
  </Container>
);

export default Body;