import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';

const LeaveScreen = ({navigation}) => {
  return (
      <View style={styles.homeContainer}>
        <Text style={styles.textWhite}>
          Having a problem to park ?! then, we got a
          solution for you. Create an account and start searching
          for a suitable park in your area
        </Text>
      </View>
  );
};
 
const styles = StyleSheet.create({
  homeContainer: {
    width:'100%',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    margin:'auto',
    paddingVertical:30,
    paddingHorizontal:25,
    backgroundColor:'#0076de',
  },
  textWhite: {
    color:'#fff',
    textAlign:'center',
    marginBottom:20
  },
  button: {
    margin:'auto',
    backgroundColor:'#fff',
    padding:18,
    color:'#ccc',
    width:'100%',
    textAlign:'center',
    borderRadius:14
  }
});
 
export default LeaveScreen;