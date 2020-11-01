//import liraries
import React from 'react';
import {View, StyleSheet} from 'react-native';

import ColorCounter from '../components/ColorCounter';

// create a component
const SquareScreen = () => {
  return (
    <View>
      <ColorCounter color="Red"></ColorCounter>
      <ColorCounter color="Blue"></ColorCounter>
      <ColorCounter color="Green"></ColorCounter>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default SquareScreen;
