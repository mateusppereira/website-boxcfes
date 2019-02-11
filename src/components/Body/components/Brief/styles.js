import styled from 'styled-components';
import { FlexColumn } from 'styles/general';
import { fadeIn } from 'styles/keyframes';

export const Container = styled(FlexColumn)`
  flex: 1;

  padding: 2rem;
  height: 40vh;
  min-width: 30vh;

  background: url(${props=> props.img});
  background-size: cover;
  background-position: center;

  span {
    display: none;
  }

  &:hover {
    background: linear-gradient(to bottom, #dddddd90, #dddddd90), url(${props=> props.img});
    background-size: cover;
    background-position: center;
    transform: scale(1.05);
    
    cursor: default;
    span {
      animation: ${fadeIn} .2s;
      color: ${props => props.theme.colors.darker};
      display: inline-block;
    }
  }
`;

export const Name = styled.span`
  font-size: 2.2rem;
  text-transform: uppercase;
  font-weight: 700;
`;
export const Age = styled.span`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;
export const Text = styled.span`
  font-size: 1.4rem;
`;