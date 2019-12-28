import { Component } from "react";
import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

export class RegisterStep2 extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Text>RegisterStep2 works!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});