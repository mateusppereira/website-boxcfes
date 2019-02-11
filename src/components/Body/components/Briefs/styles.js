import styled from 'styled-components';
import { FlexRow } from 'styles/general';

export const Container = styled(FlexRow)`
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
  padding: 1.5rem 1rem;
  /* min-height: 70vh; */

  background-color: ${props => props.theme.colors.light};

  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.darker}
  }
`;

export const BriefsSection = styled(FlexRow)`
  flex-wrap: wrap;
`

export const IIcon = styled.span`
  font-family: 'Times New Roman', Times, serif;
  font-size: 50rem;
`