//import liraries
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

// create a component
const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Feather name="search" size={30}></Feather>
      <TextInput style={styles.inputStyle} placeholder="Search" />
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
    flexDirection: "row",
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
  },
});

//make this component available to the app
export default SearchBar;
