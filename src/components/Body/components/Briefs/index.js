import React, { Component } from 'react';
import Brief from './components/Brief';
import { Container, BriefsSection, IIcon } from './styles';

class Briefs extends Component {
  state = {
    briefs: [
      {
        img: require('res/cadu-t2b.jpg'),
        name: 'Carlos Eduardo',
        age: 21,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus sit amet luctus venenatis lectus. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Maecenas accumsan lacus vel facilisis volutpat est velit egestas.',
      },
      {
        img: require('res/renato-t2b2.jpg'),
        name: 'Renato Zutin',
        age: 38,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus sit amet luctus venenatis lectus. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Maecenas accumsan lacus vel facilisis volutpat est velit egestas.',
      },
      {
        img: require('res/rapha-t2b.jpg'),
        name: 'Raphael Santos',
        age: 30,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus sit amet luctus venenatis lectus. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Maecenas accumsan lacus vel facilisis volutpat est velit egestas.',
      },
      {
        img: require('res/rapha-t2b.jpg'),
        name: 'Raphael Santos',
        age: 30,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus sit amet luctus venenatis lectus. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Maecenas accumsan lacus vel facilisis volutpat est velit egestas.',
      }
    ],
  }

  render() {
    return (
      <Container>
        <h1>Experiências de quem treina com a gente</h1>
        <BriefsSection>
          {this.state.briefs.map(brief => <Brief brief={brief} />)}
        </BriefsSection>
      </Container>
    );
  }
}

export default Briefs