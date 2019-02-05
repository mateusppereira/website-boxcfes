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