import React from 'react';
import { Container, HeaderText, HrefButtons, Img, Signin, Signup } from './styles';

const Header = () => (
  <Container>
    <Img alt="logo" src={require('res/logo.png')} />
    <HeaderText>espaço saúde</HeaderText>
    <HrefButtons>
      <Img alt="logo" src={require('res/logo.png')} />
      <Signin>Entrar</Signin>
      <Signup>Cadastrar-se</Signup>
    </HrefButtons>
  </Container>
);

export default Header;