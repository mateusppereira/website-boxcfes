import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const Flipper = ({ front, back, isFlipped, direction = "horizontal" }) => (
  <Flippy
    isFlipped={isFlipped}
    flipDirection={direction}
  >
    <FrontSide style={{ boxShadow: 'none' }}>
      {front}
    </FrontSide>
    <BackSide style={{ boxShadow: 'none' }}>
      {back}
    </BackSide>
  </Flippy>
);

export default Flipper;