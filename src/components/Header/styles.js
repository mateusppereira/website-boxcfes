import styled from 'styled-components';
import { leftToRight } from 'styles/keyframes';
import media from 'styles/media';

export const Container = styled.div`
  height: 6rem;
  min-height: 50px;
  width: 100vw;
  background-color: ${props => props.theme.colors.darker};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem .6rem;
`

export const Img = styled.img`
  width: 4rem;
  height: 4rem;
`

export const HeaderText = styled.span`
  font-size: 4rem;
  color: ${props => props.theme.colors.lighter};
  font-family: 'Graduate', sans-serif;
  letter-spacing: 0.5rem;
  text-transform: uppercase;

  animation: ${leftToRight} .3s;
`

export const HrefButtons = styled.div`
  animation: ${leftToRight} .3s;
  
  a { display: inline-block }
  
  ${media.mobile`
    a { display: none }
  `}
`

export const Signin = styled.a`
  font-size: 1.5rem;
  padding: 5px 10px;
  margin-right: 5px;
  color: ${props => props.theme.colors.lighter};
  
  &:hover {
    color: ${props => props.theme.colors.green};
    cursor: pointer;
  }
`

export const Signup = styled.a`
  font-size: 1.5rem;
  border: 1px solid ${props => props.theme.colors.lighter};
  border-radius: 4px;
  padding: 5px 10px;
  color: ${props => props.theme.colors.lighter};

  &:hover {
    border: 1px solid ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.green};
    cursor: pointer;
  }
`