//import liraries
import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { CardSection } from "./common";
import * as actions from "../actions";
import { conenct } from "react-redux";

// create a component
class ListItem extends Component {
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
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
export default connect(null, actions)(ListItem);
