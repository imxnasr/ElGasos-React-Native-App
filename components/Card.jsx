import { faArrowLeft, faFolder, faHome, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { color } from '../utils/constants';

const Card = ({list = {}, type = 'list'}) => {
  const {navigate} = useNavigation();
  const touchFn = () => {
    if(type === 'list'){
      navigate('List', {list});
    }
  }
  return (
    <Touch onPress={touchFn} disabled={type === 'thing'}>
      <TouchableOpacity ></TouchableOpacity>
      <FontAwesomeIcon style={{marginLeft: 10}} icon={type === 'add' ? faPlus : type === 'thing' ? faArrowLeft : faFolder} size={20} color={"#fff9"} />
      <Text style={{color: type === 'add' ? '#fff9' : color}}>{type === 'add' ? 'اضافة قائمة' : type === 'thing' ? list : list.name}</Text>
    </Touch>
  )
}

export default Card;

const Touch = styled.TouchableOpacity`
  width: 100%;
  background-color: #fff1;
  margin: 5px 0;
  padding: 20px;
  flex-direction: row-reverse;
  align-items: center;
  border-radius: 10px;
`;
const Text = styled.Text`
  font-family: 'Tajawal-Medium';
  font-size: 20px;
`;