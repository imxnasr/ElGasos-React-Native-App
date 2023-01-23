import React from 'react';
import styled from 'styled-components';
import { color } from '../utils/constants';
import { places } from '../utils/data';

const GameScreen = () => {
  const place = place[0];
  return (
    <Screen>
      <Text>GameScreen</Text>
    </Screen>
  )
}

export default GameScreen;

const Screen = styled.View`
  flex: 1;
`;
const Text = styled.Text`
  color: ${color};
  font-family: 'Tajawal-Regular';
  font-size: 30px;
`;