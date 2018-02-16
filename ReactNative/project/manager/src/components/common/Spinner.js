//import liraries
import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";

// create a component
const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStlye}>
      <ActivityIndicator size={size || "large"} />
    </View>
  );
};

// define your styles
const styles = {
  spinnerStlye: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

//make this component available to the app
export { Spinner };
