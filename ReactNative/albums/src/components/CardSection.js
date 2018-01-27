//import liraries
import React from "react";
import { View } from "react-native";

// create a component
const CardSection = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

// define your styles
const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative"
  }
};

//make this component available to the app
export default CardSection;
