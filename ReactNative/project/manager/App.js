/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/reducers";
import firebase from "firebase";
import LoginForm from "./src/components/LoginForm";
import ReduxThunk from "redux-thunk";

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
