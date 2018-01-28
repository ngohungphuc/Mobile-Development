//import liraries
import React, { Component } from "react";
import { View, TextInput } from "react-native";
import { Button, Card, CardSection } from "./common";
// create a component
class LoginForm extends Component {
  state = { text: "" };
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            style={{ height: 20, width: 100 }}
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
