import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    constructor(){
        super()

        this.state = ({ loggedIn: null });
        this.renderContent = this.renderContent.bind(this);
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyA6hYlY4nbeb9GuA-vthnEey96d4jHTE_o",
            authDomain: "authentication-rn-ac18b.firebaseapp.com",
            databaseURL: "https://authentication-rn-ac18b.firebaseio.com",
            projectId: "authentication-rn-ac18b",
            storageBucket: "authentication-rn-ac18b.appspot.com",
            messagingSenderId: "805454301886"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user){
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        })
    }

    renderContent() {
        if (this.state.loggedIn){
            return(
                <CardSection>
                    <Button>Log Out</Button>
                </CardSection>
            );
        }
        return <LoginForm />
    }
    
    render() {
        return(
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;