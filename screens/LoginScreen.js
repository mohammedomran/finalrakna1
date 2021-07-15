import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = ({navigation}) => {
  var email, password;
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@token', value)
    } catch (e) {
      // saving error
      console.log(e)
    }
  }
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }
  getData()
  const signin = () => {
    fetch('http://localhost:8000/api/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "api_pass":"UKyu8yu9dfsHN98RM5f4g5e64bhJGFJKF5h6j41k65hj",
        "email":email,
        "password":password,
      })
    }).then((response) => response.json())
    .then((json) => {
      console.log(json);
      if(json.code==200) {
        storeData(json.user.token);
        navigation.navigate('dashboard')
      }
    });
  };
  return (
      <View style={styles.homeContainer}>
        <Image
          source={{uri: 'https://i.imgur.com/5Rfb43q.png'}}
          style={{ width: 180, height: 64, margin:'auto', marginBottom:80 }}
        />
        <TextInput
          placeholder='email'
          style={styles.input}
          onChangeText={(val)=>email=val}
        />
        <TextInput
          secureTextEntry={true}
          placeholder='password'
          style={styles.input}
          onChangeText={(val)=>password=val}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={()=>signin()}
        >
          <Text style={{fontWeight:'bold', textAlign:'center', color:'#fff'}}>LOGIN</Text>
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
    paddingVertical:100,
    paddingHorizontal:25,
    backgroundColor:'#0076de',
  },
  textCenter: {
    textAlign:'center',
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
    backgroundColor:'#1d1d1d',
    padding:18,
    width:'100%',
    textAlign:'center',
    borderRadius:14,
    marginTop:5
  }
});
 
export default LoginScreen;