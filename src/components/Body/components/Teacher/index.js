import React from 'react';
import { Img, Name, Container } from './styles';

const Teacher = ({ name, img }) => (
  <Container>
    <Img src={img} alt="teacher" />
    <Name>{name}</Name>
  </Container>
);

export default Teacher;