import React, { useState } from 'react';
import styled from 'styled-components';
import { Logo } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faMinus, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { color } from '../utils/constants';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { places } from '../utils/data';

const StartScreen = () => {
  const {navigate} = useNavigation();
  const [persons, setPersons] = useState(3);
  const [spies, setSpies] = useState(1);
  const startGame = () => {
    let safePersons = [...Array(persons + 1).keys()].slice(1);
    for(let i = 1; i <= spies; i++){
      safePersons.splice(Math.floor(Math.random() * 100 % safePersons.length), 1);
    }
    let thing = places[Math.floor(Math.random() * 100 % places.length)];
    navigate('ShowMe', {persons, safePersons, thing, number: 1});
  }
  return (
    <Screen>
      <Pressable onPress={() => navigate('Home')}>
        <FontAwesomeIcon icon={faHome} size={30} color={color} />
      </Pressable>
      <Logo style={{alignSelf: 'center', marginBottom: 40}} />

      <Setting>
        <Title>
          <TitleText>عدد الاشخاص</TitleText>
        </Title>
        <Buttons>
          <Pressable onPress={() => {setSpies(1); setPersons(persons <= 3 ? 3 : persons - 1)}}>
            <FontAwesomeIcon icon={faMinus} size={25} color={color} />
          </Pressable>
          <Number>{persons}</Number>
          <Pressable onPress={() => {setSpies(1); setPersons(persons + 1)}}>
            <FontAwesomeIcon icon={faPlus} size={25} color={color} />
          </Pressable>
        </Buttons>
      </Setting>

      <Setting>
        <Title>
          <TitleText>كام جاسوس</TitleText>
        </Title>
        <Buttons>
          <Pressable onPress={() => setSpies(spies <= 1 ? 1 : spies - 1)}>
            <FontAwesomeIcon icon={faMinus} size={25} color={color} />
          </Pressable>
          <Number>{spies}</Number>
          <Pressable onPress={() => setSpies(spies + 2 === persons ? spies : spies + 1)}>
            <FontAwesomeIcon icon={faPlus} size={25} color={color} />
          </Pressable>
        </Buttons>
      </Setting>

      <Pressable onPress={startGame} style={{alignSelf: 'center', marginTop: 50}}>
        <FontAwesomeIcon icon={faPlay} size={50} color={color} />
      </Pressable>
    </Screen>
  )
}

export default StartScreen;

const Screen = styled.View`
  flex: 1;
  padding: 20px;
`;
const Setting = styled.View`
  margin: 20px 0;
  width: 70%;
  align-self: center;
`;
const Title = styled.View`
  width: 100%;
  background-color: #fff;
  border-radius: 200px;
  padding: 10px;
  margin-bottom: 20px;
`;
const TitleText = styled.Text`
  font-family: 'Tajawal-Regular';
  text-align: center;
  font-size: 25px;
  color: #000;
  `;
const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Number = styled.Text`
  color: ${color};
  font-size: 25px;
  font-family: 'Tajawal-Regular';
`;