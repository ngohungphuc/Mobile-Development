//import liraries
import React, { Component } from "react";
import { View } from "react-native";
import { Button, Card, CardSection, Input } from "./common";
// create a component
class LoginForm extends Component {
  state = { email: "", password: "" };
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

//make this component available to the app
export default LoginForm;
