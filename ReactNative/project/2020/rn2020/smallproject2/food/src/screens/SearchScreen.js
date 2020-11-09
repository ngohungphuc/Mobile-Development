//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./SearchBar";

// create a component
const SearchScreen = () => {
  const [term, setTerm] = useState("");

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
      ></SearchBar>
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
