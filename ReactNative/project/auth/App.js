/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import firebase from "firebase";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Header } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";

export default class App extends Component {
  state = { loggedIn: false };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCrbde6gnUhx2JclODVBVV0xsqXcQipN4A",
      authDomain: "authentication-app-fcbc2.firebaseapp.com",
      databaseURL: "https://authentication-app-fcbc2.firebaseio.com",
      projectId: "authentication-app-fcbc2",
      storageBucket: "authentication-app-fcbc2.appspot.com",
      messagingSenderId: "386712514202"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
