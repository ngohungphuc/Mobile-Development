//import liraries
import React, { Component } from "react";
import { View, Text } from "react-native";

// create a component
const Input = ({ label }) => {
  return (
    <View>
      <Text>{label}</Text>
    </View>
  );
};


//make this component available to the app
export { Input };
