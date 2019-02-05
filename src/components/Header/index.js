import React from 'react';
import { Container, Img, HeaderText, HrefButtons, Signin, Signup } from './styles';

const Header = () => (
  <Container>
    <Img alt="logo" src={require('res/logo.png')} />
    <HeaderText>espaço saúde</HeaderText>
    <HrefButtons>
      <Signin>Entrar</Signin>
      <Signup>Cadastrar-se</Signup>
    </HrefButtons>
  </Container>
);

export default Header;