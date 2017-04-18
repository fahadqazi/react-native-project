import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Button, Card, CardSection } from './common';
import { Input } from './common';

class LoginForm extends Component{
    state = { email: '', password: '' }

    onButtonPress() {
        const { email, password } = this.state; 
        firebase.auth().signInWithEmailAndPassword(email. password);
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        value={this.state.email}
                        onChangeText={email => this.setState({ email: email })}
                        label="Email"
                        placeholder="user@email.com"
                    />
                </CardSection>    

                <CardSection>
                    <Input 
                        value={this.state.password}
                        onChangeText={password => this.setState({ password: password })}
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;