import React from 'react';
import { withTheme } from 'styled-components';
import Modality from './components/Modality';
import Teacher from './components/Teacher';
import { BannerButtons, BannerText, Container, LandingSection, Section } from './styles';

const Body = ({ theme }) => (
  <Container>
    <LandingSection>
      <BannerText>O que não te desafia não te faz evoluir</BannerText>
      <BannerButtons>
        <a href="#methodology">Metodologia</a>
        <a href="#plans">Planos</a>
      </BannerButtons>
    </LandingSection>
    <Section background={`linear-gradient(to bottom, #333333, #36996F) ${theme.colors.light}`} id="methodology">
      <Modality
        name="CrossTrainning"
        img={require('res/crossfit.jpg')}
        description="ofdsfofosd asknkda dsakjdksad dsakdjaskjdaskjdasjdnas dakjsaskdnasjkd dkjasnkjasda dksjadjkasd dkasjdnak"
      />
      <Modality
        name="Treinamento Funcional"
        img={require('res/crossfit.jpg')}
        description="ofdsfofosd asknkda dsakjdksad dsakdjaskjdaskjdasjdnas dakjsaskdnasjkd dkjasnkjasda dksjadjkasd dkasjdnak"
      />
      <Modality
        name="HIIT"
        img={require('res/crossfit.jpg')}
        description="ofdsfofosd asknkda dsakjdksad dsakdjaskjdaskjdasjdnas dakjsaskdnasjkd dkjasnkjasda dksjadjkasd dkasjdnak"
      />
    </Section>
    <Section background={`linear-gradient(to bottom, #36996F, #2C2E2F) ${theme.colors.light}`} id="teachers">
      <Teacher 
        name="Raphael Santos" 
        img={require('res/rapha.jpg')}  
        description="Professor e praticante da modalidade CrossTrainning há mais de 3 anos, formado em Educação Física pela UNIVAP e pós graduado em fisiologia do exercício." 
      />
      <Teacher 
        name="Marcio Filipini" 
        img={require('res/profile.jpg')}  
        description="Fundador do Espaço Saúde e professor do espaço de treinamento funcional, formado em fisioterapia atuando há 10 anos no ramo de reabilitação e condicionamento físico." 
      />
    </Section>
  </Container>
);

export default withTheme(Body);