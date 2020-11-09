//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// create a component
const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}></Button>
      <Text>{counter}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default CounterScreen;
