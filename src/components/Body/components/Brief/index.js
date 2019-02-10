import React from 'react';
import { Container, Name, Age, Text } from './styles';

const Brief = ({ img, name, text, age}) => (
  <Container img={img}>
    <Name>{name}</Name>
    <Age>{age}</Age>
    <Text>{text}</Text>
  </Container>
);

export default Brief;