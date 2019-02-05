import React, { Component } from 'react';
import { Container } from './styles';
import Header from 'components/Header';
import Body from 'components/Body';


class Main extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Body />
        {/* <Header>
          <Img alt="logo" src={Logo} />
          <H3>Condicionamento Físico Espaço Saúde</H3>
          <Row>
            <Signin>Entrar</Signin>
            <Signup>Cadastrar-se</Signup>
          </Row>
        </Header> */}
      </Container>
    );
  }
}

export default Main;
