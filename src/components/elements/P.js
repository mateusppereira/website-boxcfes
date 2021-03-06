import React from 'react';
import { StyledP } from 'styles/general';

const P = ({ color, size = 'default', text }) => {

  switch (size) {
    case 'small':
      size = '1rem';
    break;
    case 'default':
      size = '1.6rem';
    break;
    case 'large':
      size = '2.3rem';
    break;
    default:
    break;
  }

  return (
    <StyledP font={{ size, color }}>
      {text}
    </StyledP>
  )
}

export default P;