//import liraries
import React, { Component } from "react";
import { View } from "react-native";
import { Button, Card, CardSection } from "./common";
// create a component
class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection />
        <CardSection />
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

//make this component available to the app
export default LoginForm;
