import React from 'react';
import { withTheme } from 'styled-components';
import { Icon } from 'react-icons-kit'
import { mail2, phone, location2, clock, instagram, facebook } from 'react-icons-kit/icomoon'
import { Container, Section, Text, Row } from './styles';

const Footer = ({ theme }) => (
  <Container>
    <Section fd="column" jc="space-evenly">
      <Row>
        <Icon icon={location2} size={20} style={{ color: theme.colors.lighter, marginRight: '15px' }} />
        <Text>Rua Ironman Victor Garrido, 585 - São José dos Campos - SP</Text>
      </Row>
      <Row>
        <Icon icon={clock} size={20} style={{ color: theme.colors.lighter, marginRight: '15px' }} />
        <Text>Horário de funcionamento: 07h às 12h - 15h às 22h</Text>
      </Row>
    </Section>
    <Section fd="column" jc="space-evenly">
      <Row>
        <Icon icon={phone} size={20} style={{ color: theme.colors.lighter, marginRight: '15px' }} />
        <Text>(12) 99197-3197 - (12) 98153-9478 </Text>
      </Row>
      <Row>
        <Icon icon={mail2} size={20} style={{ color: theme.colors.lighter, marginRight: '15px' }} />
        <Text><a href="mailto:contato@boxcfes.com.br">contato@boxcfes.com.br</a></Text>
      </Row>
    </Section>
    <Section fd="row" jc="flex-end" ai="center">
      <a href="https://instagram.com.br/boxcfes" target="blank">
        <Icon icon={instagram} style={{ color: theme.colors.lighter, marginRight: '20px' }} size={32} />
      </a>
      <a href="https://facebook.com.br/boxcfes" target="blank">
        <Icon icon={facebook} style={{ color: theme.colors.lighter }} size={32} />
      </a>
    </Section>
  </Container>
);

export default withTheme(Footer);