import React from 'react';
import styled from 'styled-components';
import { color } from '../utils/constants';
import { lists } from '../utils/data';
import { List } from '../components';

const ListsScreen = () => {
  return (
    <>
    <Title>القوائم</Title>
    <Screen contentContainerStyle={{alignItems: 'center', paddingHorizontal: 10, paddingVertical: 20}}>
      {lists.map((list, i) => <List key={i} list={list} />)}
      <List type="add" />
    </Screen>
    </>
  )
}

export default ListsScreen;

const Title = styled.Text`
  text-align: center;
  color: ${color};
  font-size: 40px;
  font-family: 'Tajawal-Bold';
  margin-bottom: 10px;
`;
const Screen = styled.ScrollView``;