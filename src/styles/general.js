import styled from 'styled-components';

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
  color: ${props => props.theme.colors.dark};
  box-shadow: .1rem .1rem .1rem ${props => props.theme.colors.lighter};
  margin: 1rem 0;
  padding: 1rem 1.5rem;
  border-radius: .3rem;
  border: .1rem solid ${props => props.theme.colors.lighter};

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

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.assign}
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`

export const Div = styled.div`
  padding: ${props => props.padding};

  display: flex;
  flex-direction: ${props => props.fd};
  justify-content: ${props => props.jc};
  align-items: ${props => props.ai};
`
