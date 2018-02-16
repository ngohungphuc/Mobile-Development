import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, CardSection, Input, Button } from "./common";

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Email" placeholder="Your email" />
        </CardSection>

        <CardSection>
          <Input label="Password" secureTextEntry placeholder="Your password" />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
