import React  from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as stack from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';

export default class Tutorial extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={{fontSize: 38, fontWeight: 'bold', color:'black', margin:15}}>For Tutorials</Text>
        <Text style={{margin:30, fontSize:22}}>https://reactnavigation.org/docs/getting-started</Text>
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