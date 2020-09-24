import React from 'react';
import { StyleSheet, Button,Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Home from './component/Home'
import Documentation from './component/Documentation'
import Tutorial from './component/Tutorial'


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Documentation" component={Documentation} />
      <Stack.Screen name="Tutorial" component={Tutorial} />
    </Stack.Navigator>
  );
}




export default class App extends React.Component{
  render(){
    return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer> 
    
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});