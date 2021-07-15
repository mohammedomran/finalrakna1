import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
 

const LoginSignupScreen = ({navigation}) => {
  return (
      <View style={styles.homeContainer}>
        <Image
          source={{uri: 'https://i.imgur.com/KrPbg9D.png'}}
          style={{ width: 115, height: 163, margin:'auto', marginBottom:80 }}
        />
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{navigation.navigate('login')}}
          >
            <Text style={{fontWeight:'bold', textAlign:'center'}}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={()=>{navigation.navigate('signup')}}
          >
            <Text style={{fontWeight:'bold', color:'#fff', textAlign:'center'}}>SIGN UP</Text>
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
    backgroundColor:'#0076de',
  },
  button: {
    marginHorizontal:'auto',
    backgroundColor:'#fff',
    padding:18,
    width:'100%',
    textAlign:'center',
    borderRadius:14,
    marginBottom:8
  },
  button2: {
    marginHorizontal:'auto',
    backgroundColor:'#1d1d1d',
    padding:18,
    width:'100%',
    textAlign:'center',
    borderRadius:14,
    marginBottom:8
  }
});
 
export default LoginSignupScreen;