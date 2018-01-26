/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={"Albums"} />
        <AlbumList />
      </View>
    );
  }
}
