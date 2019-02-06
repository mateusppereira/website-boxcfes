import React, { Component } from 'react';
import { Container } from './styles';
import Header from 'components/Header';
import Body from 'components/Body';
import Footer from 'components/Footer';


class Main extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Body />
        <Footer />
      </Container>
    );
  }
}

export default Main;
