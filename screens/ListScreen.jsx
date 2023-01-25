import React from 'react';
import styled from 'styled-components';
import { color } from '../utils/constants';
import { List } from '../components';
import { useRoute } from '@react-navigation/native';

const ListScreen = () => {
  const {list} = useRoute().params;
  return (
    <>
    <Title>{list.name}</Title>
    <Screen contentContainerStyle={{alignItems: 'center', paddingHorizontal: 10, paddingVertical: 20}}>
      {list.objects.map((thing, i) => <List key={i} list={thing} type="thing" />)}
      <List type="add" />
    </Screen>
    </>
  )
}

export default ListScreen;

const Title = styled.Text`
  text-align: center;
  color: ${color};
  font-size: 40px;
  font-family: 'Tajawal-Bold';
  margin-bottom: 10px;
`;
const Screen = styled.ScrollView``;