import styled from 'styled-components';
import image1 from 'res/02.jpg';

export const Container = styled.div`
  min-height: 80vh;
  max-height: 90vh;
  /* wi: 80vh; */
  /* background-image: linear-gradient(to right bottom, #36996Fbf, #ffffffD9), url(${image1}); */
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const Banner = styled.div`
  margin: 10px;
  padding: 20px 20px;
  /* border: 1px solid red; */
  max-width: 40vw;  

  @media only screen and (max-width: 800px) {
    max-width: 60vw;  
  }
`

export const BannerText = styled.span`
  font-size: 4rem;
  font-weight: 900;
  color: #EEE;
  text-transform: uppercase;
`

export const BannerButtons = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */

  button {
    font-size: 2rem;
    color: #ddd;
    margin: 10px 20px 10px 0;
    padding: 20px 15px;
    border-radius: .3rem;
    border: .1rem solid #ddd;
    background-color: #2C2E2F;
    max-width: 25rem;
    min-width: 20rem;

    &:hover {
      cursor: pointer;
    }
  }
`