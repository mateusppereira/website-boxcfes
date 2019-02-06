import React from 'react';
import { StyledButton } from 'styles/general';
import Color from 'color';

const Button = ({ bgcolor, size, color, text }) => {
  const colors = Object.assign({}, { bgcolor, bgcolor2: Color(bgcolor).darken(0.2).hex() });
  
  const font = {
    color,
    size: '1rem',
  }

  let padding, margin;
  switch (size) {
    case 'small':
      padding = '.5rem 1.5rem';  
      margin = '.5rem 0';
      font.size = '1.5rem';
    break;
    case 'default':
      padding = '.8rem 2.5rem';  
      margin = '.7rem 0';
      font.size = '2rem';
    break;
    case 'large':
      padding = '1.2rem 3.7rem';  
      margin = '1rem 0';
      font.size = '2.5rem';
    break;
    default:
    break;
  }

  return (
    <StyledButton
      colors={colors}
      font={font}
      padding={padding}
      margin={margin}
    >
      {text}
    </StyledButton>
  )
}

export default Button;