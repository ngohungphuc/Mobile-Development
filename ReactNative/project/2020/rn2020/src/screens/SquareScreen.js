//import liraries
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import ColorCounter from '../components/ColorCounter';

// create a component
const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setRed(red + 1)}
        onDecrease={() => setRed(red - 1)}></ColorCounter>
      <ColorCounter
        color="Blue"
        onIncrease={() => setGreen(green + 1)}
        onDecrease={() => setGreen(green - 1)}></ColorCounter>
      <ColorCounter
        color="Green"
        onIncrease={() => setBlue(blue + 1)}
        onDecrease={() => setBlue(blue - 1)}></ColorCounter>
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}></View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default SquareScreen;
