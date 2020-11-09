//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./SearchBar";

// create a component
const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBar></SearchBar>
      <Text>SearchScreen</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default SearchScreen;
