import React  from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as stack from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';

export default class Home extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={{fontSize: 38, fontWeight: 'bold', color:'black', margin:15}}>Welcome to React Native</Text>
        <Text style={{margin:5, fontSize:16}}> Many different kinds of people use React Native:</Text>
        <Text style={{margin:5, fontSize:16}}> from advanced iOS developers to React beginners, </Text>
        <Text style={{margin:5, fontSize:16}}> to people getting started programming for the first time in their career. </Text>
        <Text style={{margin:5, fontSize:16}}>These docs were written for all learners, no matter their experience level or background.</Text>

        <View style={{width: '50%', justifyContent:'space-between', flex:1, flexDirection: 'row', margin: 50}}>
        <View style={{width:'5%', flex:2}}>
          <Button style={{width:'5%', ButtonRadius:5}}
          onPress={() =>
            this.props.navigation.navigate('Documentation')
          }
          title='Click for Docs'/></View>
          <View style={{width:'5%', flex:2, ButtonRadius:5, marginHorizontal:10}}>
            <Button style={{width:'5%'}} 
            onPress = {() => { this.props.navigation.navigate('Tutorial') }}
            title='Click for tutorial' />
            </View>
            </View>
     
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