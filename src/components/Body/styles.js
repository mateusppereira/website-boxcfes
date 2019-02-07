import styled from 'styled-components';
import mateus from 'res/mateus.jpg';
import media from 'styles/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const LandingSection = styled.div`
  min-height: 90vh;
  max-height: 100vh;
  padding: 1.5rem;
  /* background-image: linear-gradient(to right bottom, #36996Fbf, #ffffffD9), url(${mateus}); */
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const BannerText = styled.span`
  font-size: 4rem;
  font-weight: 900;
  color: ${props => props.theme.colors.lighter};
  text-transform: uppercase;
`

export const BannerButtons = styled.div`
  display: flex;
  flex-direction: row;

  a {
    text-decoration: none;
    font-size: 2.5rem;
    margin: .3rem;
    padding: 1rem 1.6rem;
    max-width: 25rem;
    min-width: 20rem;
    color: ${props => props.theme.colors.lighter};
    background-color: ${props => props.theme.colors.dark};
    border-radius: .3rem;
    border: .1rem solid ${props => props.theme.colors.lighter};

    &:hover {
      color: ${props => props.theme.colors.dark};
      background-color: ${props => `${props.theme.colors.light}b0`};
      cursor: pointer;
    }
  }
`

export const Section = styled.div`
  min-height: 90vh;
  width: 100%;
  padding: 4.5rem 2rem;
  background: ${props => props.background};
  /* background: linear-gradient(to bottom, #333333, #36996F) ${props => props.theme.colors.light}; */

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  ${media.mobile` justify-content: center; `}
  align-items: flex-start;
`