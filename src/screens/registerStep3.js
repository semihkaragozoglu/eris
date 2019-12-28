import { Component } from "react";
import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

export class RegisterStep3 extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Text>RegisterStep3 works!</Text>
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