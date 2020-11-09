//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>BoxScreen</Text>
      <Text style={styles.textStyle}>BoxScreen</Text>
      <Text style={styles.textStyle}>BoxScreen</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'flex-start',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject // position: absolutee, top right bottom left 0
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
});

//make this component available to the app
export default BoxScreen;
