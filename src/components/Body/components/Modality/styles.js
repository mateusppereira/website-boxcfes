import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap:wrap;
  flex-direction: column;
  max-width: 35rem;
  align-content: flex-start;

  background-color: ${props => props.theme.colors.lighter};

  box-shadow: 1px 1px 18px 0px ${props => props.theme.colors.shadow};
  margin-bottom: 3.5rem;
`;

export const Img = styled.img`
  width: 100%;
  align-self: center;
`;

export const TextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 4rem 2rem;
`

export const Name = styled.h3`
  font-size: 3.6rem;
  color: ${props => props.theme.colors.darker};
  text-transform: uppercase;
`

export const Description = styled.p`
  font-size: 2rem;
  color: ${props => props.theme.colors.dark};
  font-style: italic;

`