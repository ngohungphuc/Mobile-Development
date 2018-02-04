//import liraries
import React, { Component } from "react";
import { View, Text } from "react-native";
import { CardSection } from "./common";

// create a component
class ListItem extends Component {
  render() {
    const { titleStyle } = styles;
    return (
      <CardSection>
        <Text style={titleStyle}>{this.props.library.title}</Text>
      </CardSection>
    );
  }
}

// define your styles
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};
//make this component available to the app
export default ListItem;
