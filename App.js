import { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { SplashScreen } from "./src/screens/splash";
import { createAppContainer } from "react-navigation";
import { RegisterStep1 } from "./src/screens/registerStep1";
import { RegisterStep2 } from "./src/screens/registerStep2";
import { RegisterStep3 } from "./src/screens/registerStep3";
import React from 'react';

export default class App extends Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}
const AppNavigator = createStackNavigator({
  Splash: {
    screen: SplashScreen, 
    navigationOptions: {
        header: null,
    },
  },
  Step1: {
    screen: RegisterStep1, 
    navigationOptions: { 
      headerTransparent: true, 
      headerLayoutPreset: 'center',
      headerTintColor : 'white'
    },
  },
  Step2: RegisterStep2,
  Step3: RegisterStep3
},{
  initialRouteName: "Splash",
});
const AppContainer = createAppContainer(AppNavigator);