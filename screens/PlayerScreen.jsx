import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components';
import { Logo } from '../components';
import { color } from '../utils/constants';

const PlayerScreen = () => {
  const {navigate} = useNavigation();
  const {persons, safePersons, thing, number} = useRoute().params;
  return (
    <Screen>
      <Thing>{safePersons.includes(number) ? thing : "انت جاسوس"}</Thing>
      {/* {!safePersons.includes(number) && (<Logo size={200} />)} */}
      <Button onPress={() => number === persons ? navigate('Home') : navigate('ShowMe', {persons, safePersons, thing, number: number + 1})}>
        <Text>اللي بعده</Text>
      </Button>
    </Screen>
  )
}

export default PlayerScreen;

const Screen = styled.View`
  flex: 1;
  padding: 30px 20px;
  align-items: center;
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