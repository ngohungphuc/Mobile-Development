//import liraries
import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';

// create a component
const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}></Button>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: randomRgb(),
        }}></View>
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default ColorScreen;
