//import liraries
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// create a component
const ColorCounter = ({color, onIncrease, onDecrease}) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => onIncrease()}></Button>
      <Button title={`Decrease ${color}`} onPress={() => onDecrease()}></Button>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default ColorCounter;
