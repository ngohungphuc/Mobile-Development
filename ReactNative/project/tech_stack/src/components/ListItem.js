//import liraries
import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { CardSection } from "./common";
import * as actions from "../actions";
import { connect } from "react-redux";

// create a component
class ListItem extends Component {
  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return <Text>{library.description}</Text>;
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

//make this component available to the app
export default connect(mapStateToProps, actions)(ListItem);
