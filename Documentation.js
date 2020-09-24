import React  from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as stack from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';

export default class Documentation extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={{fontSize: 38, fontWeight: 'bold', color:'black', margin: 15}}>Documentation </Text>
        <Text style={{margin:5, fontSize:16}}>What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation. </Text>
        <Text style={{margin:5, fontSize:16}}>It should cover enough for you to know how to build your typical small mobile application, </Text>
        <Text style={{margin:5, fontSize:16}}> and give you the background that you need to dive deeper into the more advanced parts of React Navigation.</Text>
        <Text style={{margin:30, fontSize:36, fontWeight:'bold'}}>Pre-Requisites</Text>
        <Text style={{margin:5, fontSize:16}}> If you're already familiar with JavaScript, React and React Native, </Text>
        <Text style={{margin:5, fontSize:16}}>then you'll be able to get moving with React Navigation quickly! </Text>
        <Text style={{margin:5, fontSize:16}}>If not, we highly recommend you to gain some basic knowledge first, </Text>
        <Text style={{margin:5, fontSize:16}}>then come back here when you're done.</Text>
        <ul syle={{margin:5, fontSize:16}}>
            <li>React Native Express </li>
            <li>Main Concepts of React</li>
            <li>React Hooks</li>
        </ul>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'flex-right',
    
  },
});