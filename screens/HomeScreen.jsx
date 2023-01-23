import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components';
import { Logo } from '../components';
import { color } from '../utils/constants';

const HomeScreen = () => {
  const {navigate} = useNavigation();
  return (
    <Screen>
      <Title>الجاسوس</Title>
      <Logo scale={200} />
      <Play onPress={() => navigate('Start')}>
        <PlayText>العب</PlayText>
      </Play>
    </Screen>
  )
}

export default HomeScreen;

const Screen = styled.View`
  flex: 1;
  padding: 30px 20px;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.Text`
  color: ${color};
  font-size: 40px;
  font-family: 'Tajawal-Bold';
  `;
const Play = styled.Pressable`
  width: 100%;
  background-color: #fff9;
  border-radius: 200px;
  padding: 20px 20px;
`;
const PlayText = styled.Text`
  color: ${color};
  text-align: center;
  font-size: 25px;
  font-family: 'Tajawal-Bold';
`;