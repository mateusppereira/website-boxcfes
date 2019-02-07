import React from 'react';
import { Container, Description, Img, Name, TextSection } from './styles';

const Modality = ({ name, img, description }) => (
  <Container>
    <Img src={img} alt="Modality" />
    <TextSection>
      <Name>{name}</Name>
      <Description>{description}</Description>
    </TextSection>
  </Container>
);

export default Modality;