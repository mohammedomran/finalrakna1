import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity, TextInput } from 'react-native';

const LeaveCorrectOtpScreen = ({navigation}) => {
  return (
      <View style={styles.homeContainer}>
        <Text style={styles.textWhite}>
          You've entered the correct OTP. Gate will open for 30 s and you can leave.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>{navigation.navigate('leavebill')}}
        >
          <Text style={{fontWeight:'bold', textAlign:'center', color:'#fff'}}>OK, SHOW MY BILL</Text>
        </TouchableOpacity>
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
    backgroundColor:'#eee',
  },
  textWhite: {
    color:'#1d1d1d',
    marginBottom:20,
  },
  input: {
    marginBottom:8,
    backgroundColor:'#fff',
    padding:13,
    color:'#1d1d1d',
    width:'100%',
    textAlign:'left',
    borderRadius:14
  },
  button: {
    marginHorizontal:'auto',
    backgroundColor:'#0076de',
    padding:18,
    color:'#ccc',
    width:'100%',
    borderRadius:14,
    marginTop:5,
  }
});
 
export default LeaveCorrectOtpScreen;