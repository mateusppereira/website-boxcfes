import styled from 'styled-components';
import renatoDu from 'res/renato-du.jpg';
import media from 'styles/media';
import { FlexRow, FlexColumn } from 'styles/general';

export const LandingSection = styled(FlexColumn)`
  justify-content: center;
  align-items: flex-start;

  min-height: 90vh;
  max-height: 100vh;
  padding: 1.5rem;

  background-image: linear-gradient(to bottom, #36996F8f, #2C2E2F), url(${renatoDu});
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
`

export const BannerTitle = styled.span`
  font-size: 4rem;
  font-weight: 900;
  color: ${props => props.theme.colors.lighter};
  text-transform: uppercase;
`

export const BannerSubtitle = styled.span`
  margin-bottom: 2rem;

  font-size: 2.5rem;
  font-weight: 400;
  color: ${props => props.theme.colors.light};
`

export const BannerButtons = styled(FlexRow)`
  a {
    margin: .3rem;
    padding: 1rem 1.6rem;
    max-width: 25rem;
    min-width: 15rem;

    text-decoration: none;
    font-size: 2rem;
    border: .1rem solid ${props => props.theme.colors.lighter};
    border-radius: .3rem;
    background-color: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.lighter};

    &:hover {
      color: ${props => props.theme.colors.dark};
      background-color: ${props => `${props.theme.colors.light}b0`};
      cursor: pointer;
    }
  }
`

export const Section = styled(FlexRow)`
  flex-wrap: wrap;
  justify-content: space-evenly;
  ${media.mobile` justify-content: center; `}
  align-items: flex-start;
  
  min-height: 90vh;
  width: 100%;
  padding: ${props => props.background ? '4.5rem 2rem' : ''};
  
  background: ${props => props.background};
  background-position: center;
`