import React from 'react';
import { Container, Description, Img, Name, TextSection } from './styles';

const Teacher = ({ name, img, description }) => (
  <Container>
    <Img src={img} alt="teacher" />
    <TextSection>
      <Name>{name}</Name>
      <Description>{description}</Description>
    </TextSection>
  </Container>
);

export default Teacher;