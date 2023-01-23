import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components';
import { color } from '../utils/constants';
import { places } from '../utils/data';

const PlayerScreen = () => {
  const {navigate} = useNavigation();
  const place = places[Math.floor(Math.random() * 100 % places.length)];
  return (
    <Screen>
      <Thing>{place}</Thing>
      <Button onPress={() => navigate('ShowMe')}>
        <Text>اللي بعده</Text>
      </Button>
    </Screen>
  )
}

export default PlayerScreen;

const Screen = styled.View`
  flex: 1;
  padding: 30px 20px;
  justify-content: space-between;
`;
const Thing = styled.Text`
  color: ${color};
  font-family: 'Tajawal-Regular';
  text-align: center;
  font-size: 60px;
`;
const Button = styled.Pressable`
  width: 100%;
  background-color: #fff9;
  border-radius: 200px;
  padding: 20px 20px;
`;
const Text = styled.Text`
  color: ${color};
  text-align: center;
  font-size: 25px;
  font-family: 'Tajawal-Bold';
`;