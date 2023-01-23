import React from 'react';
import styled from 'styled-components';
import { color } from '../utils/constants';

const HomeScreen = () => {
  return (
    <Screen>
      <Title>الجاسوس</Title>
    </Screen>
  )
}

export default HomeScreen;

const Screen = styled.View`
  flex: 1;
  padding: 30px 0;
`;
const Title = styled.Text`
  color: ${color};
  text-align: center;
  font-size: 30px;
  font-family: 'Tajawal-Bold';
`;