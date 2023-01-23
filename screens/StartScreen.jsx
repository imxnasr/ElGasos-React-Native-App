import React from 'react';
import styled from 'styled-components';
import { Logo } from '../components';

const StartScreen = () => {
  return (
    <Screen>
      <Logo />
    </Screen>
  )
}

export default StartScreen;

const Screen = styled.View`
  flex: 1;
`;