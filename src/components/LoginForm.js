import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card, CardSection } from './common';
import { Input } from './common';

class LoginForm extends Component{
    state = { email: '', password: '' }

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
                    <Button>Log in</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;