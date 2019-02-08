import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap:wrap;
  flex-direction: column;
  max-width: 35rem;
  align-content: flex-start;

  margin-bottom: 3.5rem;
`;

export const Img = styled.img`
  border-radius: 100rem;
  width: 20rem;
  height: 20rem;
  box-shadow: 1px 1px 18px 0px ${props => props.theme.colors.shadow};

  margin-bottom: 2.5rem;
  margin-right: 2.5rem;
`;

export const TextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Name = styled.h3`
  font-size: 3.6rem;
  color: ${props => props.theme.colors.lighter};
  margin-bottom: 1rem;
`

export const Description = styled.span`
  font-weight: thin;
  font-size: 1.8rem;
  color: ${props => props.theme.colors.light};
  font-style: italic;
`