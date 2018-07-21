import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Button, Text} from 'react-native';

export default class App extends Component {
  state = {
    placeName: "",
    places: []
  };

  placeNameChangedHandler = val => {
    this.setState({placeName: val});
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState({
        places: this.state.places.concat(this.state.placeName)
    });
  }

  render() {
    const placesOutput = this.state.places.map((place, i) => {
      <Text key={i}>{place}</Text>
    });
    
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="An awesome place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
            style={styles.placeInput}/>
          <Button
            title="Add"
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}/></View>

            <View>{placesOutput}</View>
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