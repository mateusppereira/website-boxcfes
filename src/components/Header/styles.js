import styled from 'styled-components';
import { leftToRight } from 'styles/keyframes';

export const Container = styled.div`
  height: 6rem;
  width: 100vw;
  background-color: #333;

  /* position: fixed; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 6px;
`

export const Img = styled.img`
  width: 4rem;
  height: 4rem;
`

export const HeaderText = styled.span`
  font-size: 4.5rem;
  color: #ddd;
  font-family: 'Graduate', sans-serif;
  letter-spacing: 0.5rem;
  text-transform: uppercase;

  animation: ${leftToRight} .3s;
`

export const HrefButtons = styled.div`
  animation: ${leftToRight} .3s;
  
`

export const Signin = styled.a`
  font-size: 1.5rem;
  padding: 5px 10px;
  margin-right: 5px;
  color: #ddd;
  
  &:hover {
    color: #36996F;
    cursor: pointer;
  }
`

export const Signup = styled.a`
  font-size: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px 10px;
  color: #ddd;

  &:hover {
    border: 1px solid #36996F;
    color: #36996F;
    cursor: pointer;
  }
`