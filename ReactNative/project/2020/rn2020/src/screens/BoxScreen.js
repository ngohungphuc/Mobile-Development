//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>BoxScreen</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

//make this component available to the app
export default BoxScreen;
