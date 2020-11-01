//import liraries
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// create a component
const ColorCounter = ({color}) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`}></Button>
      <Button title={`Decrease ${color}`}></Button>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default ColorCounter;
