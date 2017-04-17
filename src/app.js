import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyA6hYlY4nbeb9GuA-vthnEey96d4jHTE_o",
            authDomain: "authentication-rn-ac18b.firebaseapp.com",
            databaseURL: "https://authentication-rn-ac18b.firebaseio.com",
            projectId: "authentication-rn-ac18b",
            storageBucket: "authentication-rn-ac18b.appspot.com",
            messagingSenderId: "805454301886"
        });
    }
    
    render() {
        return(
            <View>
                <Header headerText="Authentication"/>
                <Text>Coming from the App!</Text>
            </View>
        );
    }
}

export default App;