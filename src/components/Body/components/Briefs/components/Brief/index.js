import React from 'react';
import { ImgSection, Container, TextSection } from './styles';

const Brief = ({ brief }) => (
  <Container current={brief.current}>
    <ImgSection>
      <img alt="athlete" src={brief.img} />
    </ImgSection>
    <TextSection>
      <h1>{brief.name}, {brief.age}</h1>
      <p>{brief.text}</p>
    </TextSection>
  </Container>
);

export default Brief;