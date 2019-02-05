import styled from 'styled-components';

export const colors = {
  dark: '#2C2E2F',
  darklight: '#4c4f51',
  white: '#FFF',
  lighter: '#eee',
  light: '#F3E8EE',
  blue: '#007BFF',
  red: '#FF483C',
  green: '#52CC6C',
  yellow: '#FFD014'
}

export const StyledP = styled.p`
  font-size: ${props => props.font.size};
  color: ${props => props.font.color};
`

export const StyledButton = styled.button`
  font-size: ${props => props.font.size};
  color: ${props => props.font.color};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-radius: .3rem;
  border: .1rem solid ${props => props.colors.bgcolor2};
  background-color: ${props => props.colors.bgcolor};

  &:hover {
    background-color: ${props => props.colors.bgcolor2};
    cursor: pointer;
  }
`

export const StyledTextInput = styled.input`
  flex-grow: 1;
  font-size: ${props => props.fontsize};
  color: ${colors.dark};
  box-shadow: .1rem .1rem .1rem ${colors.lighter};
  margin: 1rem 0;
  padding: 1rem 1.5rem;
  border-radius: .3rem;
  border: .1rem solid ${colors.lighter};
  background-color: ${colors.white};

  ${props => props.overwrite};
`

export const H1 = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
`

export const H3 = styled.h3`
  font-weight: normal;
  font-size: 2rem;
  margin-bottom: .5rem;
`

export const Div = styled.div`
  padding: ${props => props.padding};

  display: flex;
  flex-direction: ${props => props.fd};
  justify-content: ${props => props.jc};
  align-items: ${props => props.ai};
`
