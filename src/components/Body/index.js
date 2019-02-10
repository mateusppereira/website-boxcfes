import React from 'react';
import { withTheme } from 'styled-components';
import { FlexColumn } from 'styles/general';
import Modality from './components/Modality';
import Teacher from './components/Teacher';
import Brief from './components/Brief';
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
        description="Movimentos funcionais constantementes vairaidos em alta intensidade"
        plans={crossPlans}
      />
      <Modality
        name="Cross trainning"
        img={require('res/claudinha-t2b.jpg')}
        description="Movimentos funcionais constantementes vairaidos em alta intensidade"
        plans={crossPlans}
      />
      <Modality
        name="Treinamento Funcional"
        img={require('res/cadu-t2b.jpg')}
        description="ofdsfofosd asknkda dsakjdksad dsakdjaskjdaskjdasjdnas dakjsaskdnasjkd dkjasnkjasda dksjadjkasd dkasjdnak"
        plans={functionalPlans}
      />
      <Modality
        name="HIIT"
        img={require('res/rapha-t2b.jpg')}
        description="ofdsfofosd asknkda dsakjdksad dsakdjaskjdaskjdasjdnas dakjsaskdnasjkd dkjasnkjasda dksjadjkasd dkasjdnak"
        plans={hiitPlans}
      />
      <Modality
        name="Pilates"
        img={require('res/renato-t2b.jpg')}
        description="ofdsfofosd asknkda dsakjdksad dsakdjaskjdaskjdasjdnas dakjsaskdnasjkd dkjasnkjasda dksjadjkasd dkasjdnak"
        plans={pilatesPlans}
      />
    </Section>
    <Section id="athletes">
      <Brief
        img={require('res/renato-t2b2.jpg')}
        name="Mateus Pereira"
        age={21}
        text="Gosto sadjaskda daskjd askjd askjd askjdaskdkjsadsa. Fdkaskajdsaj fsakjf a dsajdsakd kajda dskajd akadkjdasd. Dsajdsa dskajdka dkasdk dasjdakdask"
      />
      <Brief
        img={require('res/rapha-t2b.jpg')}
        name="Mateus Pereira"
        age={21}
        text="Gosto sadjaskda daskjd askjd askjd askjdaskdkjsadsa. Fdkaskajdsaj fsakjf a dsajdsakd kajda dskajd akadkjdasd. Dsajdsa dskajdka dkasdk dasjdakdask"
      />
      <Brief
        img={require('res/claudinha-t2b.jpg')}
        name="Mateus Pereira"
        age={21}
        text="Gosto sadjaskda daskjd askjd askjd askjdaskdkjsadsa. Fdkaskajdsaj fsakjf a dsajdsakd kajda dskajd akadkjdasd. Dsajdsa dskajdka dkasdk dasjdakdask"
      />
      <Brief
        img={require('res/mateus.jpg')}
        name="Mateus Pereira"
        age={21}
        text="Gosto sadjaskda daskjd askjd askjd askjdaskdkjsadsa. Fdkaskajdsaj fsakjf a dsajdsakd kajda dskajd akadkjdasd. Dsajdsa dskajdka dkasdk dasjdakdask"
      />
      <Brief
        img={require('res/fernanda.jpg')}
        name="Mateus Pereira"
        age={21}
        text="Gosto sadjaskda daskjd askjd askjd askjdaskdkjsadsa. Fdkaskajdsaj fsakjf a dsajdsakd kajda dskajd akadkjdasd. Dsajdsa dskajdka dkasdk dasjdakdask"
      />
      <Brief
        img={require('res/dudu-t2b.jpg')}
        name="Mateus Pereira"
        age={21}
        text="Gosto sadjaskda daskjd askjd askjd askjdaskdkjsadsa. Fdkaskajdsaj fsakjf a dsajdsakd kajda dskajd akadkjdasd. Dsajdsa dskajdka dkasdk dasjdakdask"
      />
      <Brief
        img={require('res/renato-t2b2.jpg')}
        name="Mateus Pereira"
        age={21}
        text="Gosto sadjaskda daskjd askjd askjd askjdaskdkjsadsa. Fdkaskajdsaj fsakjf a dsajdsakd kajda dskajd akadkjdasd. Dsajdsa dskajdka dkasdk dasjdakdask"
      />
      <Brief
        img={require('res/rapha-t2b.jpg')}
        name="Mateus Pereira"
        age={21}
        text="Gosto sadjaskda daskjd askjd askjd askjdaskdkjsadsa. Fdkaskajdsaj fsakjf a dsajdsakd kajda dskajd akadkjdasd. Dsajdsa dskajdka dkasdk dasjdakdask"
      />
      <Brief
        img={require('res/claudinha-t2b.jpg')}
        name="Mateus Pereira"
        age={21}
        text="Gosto sadjaskda daskjd askjd askjd askjdaskdkjsadsa. Fdkaskajdsaj fsakjf a dsajdsakd kajda dskajd akadkjdasd. Dsajdsa dskajdka dkasdk dasjdakdask"
      />
      <Brief
        img={require('res/mateus.jpg')}
        name="Mateus Pereira"
        age={21}
        text="Gosto sadjaskda daskjd askjd askjd askjdaskdkjsadsa. Fdkaskajdsaj fsakjf a dsajdsakd kajda dskajd akadkjdasd. Dsajdsa dskajdka dkasdk dasjdakdask"
      />
      <Brief
        img={require('res/fernanda.jpg')}
        name="Mateus Pereira"
        age={21}
        text="Gosto sadjaskda daskjd askjd askjd askjdaskdkjsadsa. Fdkaskajdsaj fsakjf a dsajdsakd kajda dskajd akadkjdasd. Dsajdsa dskajdka dkasdk dasjdakdask"
      />
      <Brief
        img={require('res/dudu-t2b.jpg')}
        name="Mateus Pereira"
        age={21}
        text="Gosto sadjaskda daskjd askjd askjd askjdaskdkjsadsa. Fdkaskajdsaj fsakjf a dsajdsakd kajda dskajd akadkjdasd. Dsajdsa dskajdka dkasdk dasjdakdask"
      />
      <Brief
        img={require('res/renato-t2b2.jpg')}
        name="Mateus Pereira"
        age={21}
        text="Gosto sadjaskda daskjd askjd askjd askjdaskdkjsadsa. Fdkaskajdsaj fsakjf a dsajdsakd kajda dskajd akadkjdasd. Dsajdsa dskajdka dkasdk dasjdakdask"
      />
      <Brief
        img={require('res/rapha-t2b.jpg')}
        name="Mateus Pereira"
        age={21}
        text="Gosto sadjaskda daskjd askjd askjd askjdaskdkjsadsa. Fdkaskajdsaj fsakjf a dsajdsakd kajda dskajd akadkjdasd. Dsajdsa dskajdka dkasdk dasjdakdask"
      />
      <Brief
        img={require('res/claudinha-t2b.jpg')}
        name="Mateus Pereira"
        age={21}
        text="Gosto sadjaskda daskjd askjd askjd askjdaskdkjsadsa. Fdkaskajdsaj fsakjf a dsajdsakd kajda dskajd akadkjdasd. Dsajdsa dskajdka dkasdk dasjdakdask"
      />
      <Brief
        img={require('res/mateus.jpg')}
        name="Mateus Pereira"
        age={21}
        text="Gosto sadjaskda daskjd askjd askjd askjdaskdkjsadsa. Fdkaskajdsaj fsakjf a dsajdsakd kajda dskajd akadkjdasd. Dsajdsa dskajdka dkasdk dasjdakdask"
      />
      <Brief
        img={require('res/fernanda.jpg')}
        name="Mateus Pereira"
        age={21}
        text="Gosto sadjaskda daskjd askjd askjd askjdaskdkjsadsa. Fdkaskajdsaj fsakjf a dsajdsakd kajda dskajd akadkjdasd. Dsajdsa dskajdka dkasdk dasjdakdask"
      />
      <Brief
        img={require('res/dudu-t2b.jpg')}
        name="Mateus Pereira"
        age={21}
        text="Gosto sadjaskda daskjd askjd askjd askjdaskdkjsadsa. Fdkaskajdsaj fsakjf a dsajdsakd kajda dskajd akadkjdasd. Dsajdsa dskajdka dkasdk dasjdakdask"
      />
    </Section>
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