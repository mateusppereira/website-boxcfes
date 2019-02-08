import Flipper from 'components/Flipper';
import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Icon } from 'react-icons-kit';
import { arrowLeft2 } from 'react-icons-kit/icomoon';
import { withTheme } from 'styled-components';
import { ContainerModality, ContainerPrice, Description, FooterSection, Img, KeyText, Name, PriceSection, PriceText, TextSection } from './styles';

class Modality extends Component {
  state = {
    isFlipped: false,
  }

  render() {
    const { img, name, description, plans, theme } = this.props;
    return (
    <ScrollAnimation animateIn="flipInY" animateOnce >
      <Flipper
        isFlipped={this.state.isFlipped}
        front={
          <ContainerModality>
            <Img src={img} alt="Modality" />
            <TextSection>
              <Name>{name}</Name>
              <Description>{description}</Description>
            </TextSection>
            <FooterSection>
              <button onClick={() => this.setState({ isFlipped: !this.state.isFlipped })}>Ver planos</button>
            </FooterSection>
          </ContainerModality>
        }
        back={
          <ContainerPrice>
            {plans.map(plan => (
              <PriceSection>
                <KeyText>{plan.name}</KeyText>
                <PriceText>{plan.price}</PriceText>
              </PriceSection>
            ))}
            <Icon
              onClick={() => this.setState({ isFlipped: !this.state.isFlipped })}
              icon={arrowLeft2}
              style={{ alignSelf: 'flex-end', color: theme.colors.darker }}
              size={14}
            />
          </ContainerPrice>
        }
      />
    </ScrollAnimation>
    );
  }
}

export default withTheme(Modality);