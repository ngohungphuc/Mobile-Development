import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native';

export default class App extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({placeName: val});
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="An awesome place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
            style={styles.placeInput}/>
          <Button title="Add" style={styles.placeButton}/></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputContainer: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});