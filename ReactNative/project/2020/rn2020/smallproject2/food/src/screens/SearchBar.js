//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Text>SearchBar</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  },
});

//make this component available to the app
export default SearchBar;
