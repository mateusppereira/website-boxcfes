import styled from 'styled-components';
import { FlexRow } from 'styles/general';
import media from 'styles/media';

export const Container = styled(FlexRow)`
  flex: 1;
  padding: 1rem 1rem;
  margin: 1rem;
  ${media.mobile` margin: 1rem 0; `}
  min-width: 30vw;
  ${media.mobile` min-width: 90vw; `}

  box-shadow: 1px 1px 2px 0px #777;
  background-color: ${props => props.theme.colors.lighter};
`;

export const ImgSection = styled.div`
  margin-right: 1rem;

  img {
    height: 10rem;
    width: 10rem;
    object-fit: cover;
    border-radius: 1000rem;
  }
`

export const TextSection = styled.div`
  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.darker};
  }

  p {
    font-size: 1.4rem;
    color: ${props => props.theme.colors.dark};
  }
`