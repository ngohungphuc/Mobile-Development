import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Component page"
        onPress={() => {
          navigation.navigate('Components');
        }}></Button>
      <Button
        title="List page"
        onPress={() => {
          navigation.navigate('List');
        }}></Button>
      <Button
        title="Image page"
        onPress={() => {
          navigation.navigate('Image');
        }}></Button>
      <Button
        title="Counter page"
        onPress={() => {
          navigation.navigate('Counter');
        }}></Button>
      <Button
        title="Color page"
        onPress={() => {
          navigation.navigate('Color');
        }}></Button>
      <Button
        title="Square page"
        onPress={() => {
          navigation.navigate('Square');
        }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
