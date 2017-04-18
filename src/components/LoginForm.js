import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Button, Card, CardSection } from './common';
import { Input } from './common';

class LoginForm extends Component{
    state = { email: '', password: '', error: '' }

    onButtonPress() {
        const { email, password } = this.state; 

        this.setState({ error: '' });

        firebase.auth().signInWithEmailAndPassword(email. password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() =>{
                        this.setState({ error: 'Authentication Error'})
                    })
            })
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

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20, 
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;