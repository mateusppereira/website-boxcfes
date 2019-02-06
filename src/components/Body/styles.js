import styled from 'styled-components';
import image1 from 'res/03.jpg';
import media from 'styles/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const LandingSection = styled.div`
  min-height: 80vh;
  max-height: 90vh;
  padding: 1.5rem;
  /* background-image: linear-gradient(to right bottom, #36996Fbf, #ffffffD9), url(${image1}); */
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const LandingBanner = styled.div`
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

  button {
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

export const TeachersSection = styled.div`
  min-height: 70vh;
  padding: 1.5rem;
  background-color: ${props => props.theme.colors.dark};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

