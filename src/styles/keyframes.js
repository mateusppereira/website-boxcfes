import { keyframes } from 'styled-components';

export const leftToRight = keyframes`
  0% {
    transform: translateX(-20rem);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

export const rightToleft = keyframes`
  0% {
    transform: translateX(5rem);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

export const makeOpacity = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: .7;
  }
  100% {
    opacity: .5;
  }
`

export const fadeIn = keyframes`
  0% {
    opacity: .2;
    color: #fff;
    transform: scale(0.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
    color: ${props => props.theme.colors.dark};
  }
`