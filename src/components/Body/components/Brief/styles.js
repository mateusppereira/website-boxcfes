import styled from 'styled-components';
import { FlexColumn } from 'styles/general';

export const Container = styled(FlexColumn)`
  flex: 1;

  padding: 2rem;
  height: 40vh;
  min-width: 30vh;

  background: url(${props=> props.img});
  background-size: cover;
  background-position: center;

  span {
    display: none;
  }

  &:hover {
    background: linear-gradient(to bottom, #dddddd90, #dddddd90), url(${props=> props.img});
    background-size: cover;
    background-position: center;
    transform: scale(1.05);
    cursor: default;
    span {
      display: inline-block;
    }
  }
`;

export const Name = styled.span`
  font-size: 2.2rem;
`;
export const Age = styled.span`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;
export const Text = styled.span`
  font-size: 1.4rem;
`;