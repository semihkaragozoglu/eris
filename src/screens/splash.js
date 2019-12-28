import { Component } from "react";
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Button, Text } from 'native-base';
import React from 'react'; 

export class SplashScreen extends Component {
    render() {
        return (
            <ImageBackground source={require('../../assets/images/bg.jpg')} style={styles.container}>
               <Text style={styles.brandName} >Eris</Text>
               <Text style={styles.dailyWelcome} >Sizin için olayları tam olarak buradan inceliyoruz!</Text>
               <Button bordered dark style={styles.goAppBtn} onPress={() => this.props.navigation.navigate('Step1')}>
                    <Text style={styles.butonText}>Hadi başlayalım</Text>
               </Button>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null, 
        alignItems: 'center',
      },
    moon: {
        width: 200,
        height: 200
      },
      brandName:{
          color: '#ff7315',
          fontSize: 62,
          fontFamily: 'telescopeFont',
          marginTop: '10%'
      },
      dailyWelcome:{
        color: '#f67280',
        fontSize: 23,
        textAlign:'center',
        margin: '5%',
        marginTop: '30%',
        fontSize: 29,
        fontFamily: 'telescopeFont'
      },
      goAppBtn:{
        position: 'absolute',
        bottom:30
      },
      butonText:{
        color:'#3a3535',
        fontSize: 22
      }

});