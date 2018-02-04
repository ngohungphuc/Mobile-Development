//import liraries
import React, { Component } from "react";
import { View, Text, ListView } from "react-native";
import { connect } from "react-redux";
import ListItem from "./ListItem";
// create a component
class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  //render single element inside list
  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return <ListView dataSource={this.dataSource} renderRow={this.renderRow} />;
  }
}

// define your styles

//take global state object and map to props
const mapStateToProps = state => {
  return { libraries: state.libraries };
};
//make this component available to the app
export default connect(mapStateToProps)(LibraryList);
