import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Component page"
        onPress={() => {
          props.navigation.navigate('Components');
        }}></Button>
      <Button
        title="List page"
        onPress={() => {
          props.navigation.navigate('List');
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
