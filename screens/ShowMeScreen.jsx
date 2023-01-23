import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components';
import { color } from '../utils/constants';

const ShowMeScreen = () => {
  const {navigate} = useNavigation();
  return (
    <Screen>
      <Title>صفحة ملهاش لازمة 🙂</Title>
      <Button onPress={() => navigate('Player')}>
        <Text>وريني</Text>
      </Button>
    </Screen>
  )
}

export default ShowMeScreen;

const Screen = styled.View`
  flex: 1;
  padding: 30px 20px;
  justify-content: space-between;
  `;
const Title = styled.Text`
  color: ${color};
  font-family: 'Tajawal-Bold';
  font-size: 35px;
  text-align: center;

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