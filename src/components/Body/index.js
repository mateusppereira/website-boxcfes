import React from 'react';
import { withTheme } from 'styled-components';
import { FlexColumn } from 'styles/general';
import Briefs from './components/Briefs';
import Modality from './components/Modality';
import Teacher from './components/Teacher';
import { BannerButtons, BannerSubtitle, BannerTitle, LandingSection, Section } from './styles';

const crossPlans = [
  { name: 'anual', price: 0 },
  { name: 'semestral', price: 0 },
  { name: 'trimestral', price: 0 },
  { name: 'mensal', price: 0 }
]

const functionalPlans = [
  { name: 'anual', price: 0 },
  { name: 'semestral', price: 0 },
  { name: 'trimestral', price: 0 },
  { name: 'mensal', price: 0 }
]

const hiitPlans = [
  { name: 'anual', price: 0 },
  { name: 'semestral', price: 0 },
  { name: 'trimestral', price: 0 },
  { name: 'mensal', price: 0 }
]

const pilatesPlans = [
  { name: 'anual', price: 0 },
  { name: 'semestral', price: 0 },
  { name: 'trimestral', price: 0 },
  { name: 'mensal', price: 0 }
]

const Body = ({ theme }) => (
  <FlexColumn>
    <LandingSection>
      <BannerTitle>O que não te desafia nunca te fará evoluir</BannerTitle>
      <BannerSubtitle>Conheça nossas metodologias e nossos planos para você</BannerSubtitle>
      <BannerButtons>
        <a href="#methodology">Metodologia</a>
        <a href="#teachers">Professores</a>
      </BannerButtons>
    </LandingSection>
    <Section id="methodology" background={`linear-gradient(to bottom, #333333, #36996F) ${theme.colors.light}`}>
      <Modality
        name="Cross trainning"
        img={require('res/dudu-t2b.jpg')}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus."
        plans={crossPlans}
      />
      <Modality
        name="Cross trainning"
        img={require('res/claudinha-t2b.jpg')}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus."
        plans={crossPlans}
      />
      <Modality
        name="Treinamento Funcional"
        img={require('res/cadu-t2b.jpg')}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus."
        plans={functionalPlans}
      />
      <Modality
        name="HIIT"
        img={require('res/rapha-t2b.jpg')}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus."
        plans={hiitPlans}
      />
      <Modality
        name="Pilates"
        img={require('res/renato-t2b.jpg')}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus."
        plans={pilatesPlans}
      />
    </Section>
    <Briefs />
    <Section id="teachers" background={`linear-gradient(to bottom, #36996F, #2C2E2F) ${theme.colors.light}`}>
      <Teacher
        name="Raphael Santos"
        img={require('res/rapha-c2b.jpg')}
        description="Professor e praticante da modalidade CrossTrainning há mais de 3 anos, formado em Educação Física pela UNIVAP e pós graduado em fisiologia do exercício."
      />
      <Teacher
        name="Marcio Filipini"
        img={require('res/profile.jpg')}
        description="Fundador do Espaço Saúde e professor do espaço de treinamento funcional, formado em fisioterapia atuando há 10 anos no ramo de reabilitação e condicionamento físico."
      />
    </Section>
  </FlexColumn>
);

export default withTheme(Body);