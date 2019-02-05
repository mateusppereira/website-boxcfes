import React from 'react';
import { StyledTextInput } from 'styles/general';

const TextInput = ({ size, placeholder, password, overwrite= {} }) => {
  let fontsize;
  switch (size) {
    case 'small':
      fontsize = '1.2rem';
    break;
    case 'default':
      fontsize = '1.8rem';
    break;
    case 'large':
      fontsize = '2.3rem';
    break;
    default:
    break;
  }

  return (
    <StyledTextInput
      placeholder={placeholder}
      fontsize={fontsize}
      overwrite={overwrite}
      type={password ? "password" : "text"}
    />
  )
}

export default TextInput;