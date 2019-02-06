import React from 'react';
import Teacher from './components/Teacher';
import { TeachersSection, Container, LandingSection, LandingBanner, BannerText, BannerButtons, Banner } from './styles';

const Body = () => (
  <Container>
    <LandingSection>
      <LandingBanner>
        <BannerText>O que não te desafia não te faz evoluir</BannerText>
        <BannerButtons>
          <button>Metodologia</button>
          <button>Planos</button>
        </BannerButtons>
      </LandingBanner>
    </LandingSection>
    <TeachersSection>
      {/* <Teacher name="Raphael" img={""} />
      <Teacher name="Marcio" img={""} /> */}
    </TeachersSection>
  </Container>
);

export default Body;