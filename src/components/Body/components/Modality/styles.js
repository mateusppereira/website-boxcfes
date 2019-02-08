import styled from 'styled-components';
import media from 'styles/media';
import { FlexColumn, FlexRow } from 'styles/general';

export const ContainerModality = styled(FlexColumn)`
  flex-wrap:wrap;
  align-content: flex-start;

  max-width: 35rem;
  min-height: 75vh;
  ${media.mobile` min-height: 50vh; `};
  max-height: 85vh;
  margin: 0 1rem 3.5rem 1rem;
  ${media.mobile` margin: 0 1rem 3.5rem 1rem; `}

  background-color: ${props => props.theme.colors.lighter};
  box-shadow: 1px 1px 18px 0px ${props => props.theme.colors.shadow};
`;

export const Img = styled.img`
  align-self: center;
  width: 100%;
`;

export const TextSection = styled(FlexColumn)`
  flex: 1;
  
  margin: 2.5rem 1.5rem .5rem 1.5rem;
`

export const Name = styled.h3`
  margin-bottom: 1rem;
  
  font-size: 3.6rem;
  color: ${props => props.theme.colors.darker};
  text-transform: uppercase;
`

export const Description = styled.p`
  font-family: sans-serif;
  font-size: 2rem;
  color: ${props => props.theme.colors.dark};
  font-style: italic;
`

export const FooterSection = styled(FlexRow)`
  justify-content: flex-end;
  align-items: center;

  min-height: 3rem;
  margin: 1rem 1.5rem;

  button {
    padding: .5rem 1.5rem;
  
    border: 1px solid ${props => props.theme.colors.darker};
    border-radius: .2rem;
    font-size: 1.4rem;
    background-color: transparent;
    color: ${props => props.theme.colors.dark};

    :hover {
      border-color: ${props => props.theme.colors.green};
      color: ${props => props.theme.colors.green};
    }
  }
`

export const ContainerPrice = styled(FlexColumn)`
  justify-content: space-evenly;

  max-width: 35rem;
  min-height: 75vh;
  ${media.mobile` min-height: 50vh; `};
  max-height: 85vh;
  margin: 0 1rem 3.5rem 1rem;
  ${media.mobile` margin: 0 1rem 3.5rem 1rem; `}
  padding: 2rem 2.5rem;

  background-color: ${props => props.theme.colors.lighter};
  box-shadow: 1px 1px 18px 0px ${props => props.theme.colors.shadow};

`;

export const PriceSection = styled(FlexRow)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const KeyText = styled.span`
  font-size: 2.4rem;
  font-weight: 700;
  text-transform: uppercase;

  margin-right: 1.5rem;
`

export const PriceText = styled.span`
  font-size: 2rem;
  text-transform: uppercase;

  &::before {
    content: 'R$ ';
  }
`