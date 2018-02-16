/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/reducers";
import firebase from "firebase";
import LoginForm from "./src/components/LoginForm";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAIUCOasyoSn-HYIpaRsaOpZwXnwlHZ8qc",
      authDomain: "tony-manager.firebaseapp.com",
      databaseURL: "https://tony-manager.firebaseio.com",
      projectId: "tony-manager",
      storageBucket: "",
      messagingSenderId: "23852037795"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
