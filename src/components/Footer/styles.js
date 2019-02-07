import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 15vh;
  background-color: ${props => props.theme.colors.darker};
  border-top: 1px solid ${props => props.theme.colors.light};
  padding: 1rem 1.5rem;
`;

export const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: ${props => props.fd};
  justify-content: ${props => props.jc};
  align-items: ${props => props.ai};

  padding: 0 1rem;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;  
  align-items: center;
`

export const Text = styled.p`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.lighter};

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.green}
  }
  
`