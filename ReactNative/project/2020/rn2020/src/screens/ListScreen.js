import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: 'a'},
    {name: 'b'},
    {name: 'c'},
    {name: 'd'},
    {name: 'e'},
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({item}) => {
        return <Text>{item.name}</Text>;
      }}></FlatList>
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
