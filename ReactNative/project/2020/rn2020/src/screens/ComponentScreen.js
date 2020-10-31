import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

const ComponentScreen = () => {
  const friends = [
    {name: 'a'},
    {name: 'b'},
    {name: 'c'},
    {name: 'd'},
    {name: 'e'},
  ];
  return (
    <FlatList
      data={friends}
      renderItem={({item}) => {
        return <Text>{item.name}</Text>;
      }}></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentScreen;
