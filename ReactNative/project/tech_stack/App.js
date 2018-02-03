/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/reducers";

const App = () => {
  return;
  <Provider store={createStore(reducers)}>
    <View />
  </Provider>;
};

export default App;
