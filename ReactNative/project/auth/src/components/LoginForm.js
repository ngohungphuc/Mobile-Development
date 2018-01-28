//import liraries
import React, { Component } from "react";
import { View } from "react-native";
import { Button, Card, CardSection, Input } from "./common";
// create a component
class LoginForm extends Component {
  state = { text: "" };
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        </CardSection>

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
