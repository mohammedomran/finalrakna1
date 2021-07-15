import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignupScreen = ({navigation}) => {
  var first_name, last_name, email, mobile, password;
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@token', value)
    } catch (e) {
      // saving error
      console.log(e)
    }
  }
  const signup = () => {
    fetch('http://localhost:8000/api/users/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "api_pass":"UKyu8yu9dfsHN98RM5f4g5e64bhJGFJKF5h6j41k65hj",
        "first_name":first_name,
        "last_name":last_name,
        "mobile":mobile,
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
      <View>
        <View style={styles.specialInput} >
          <TextInput
            placeholder='first name'
            style={[styles.input, styles.w1]}
            onChangeText={(val)=>first_name=val}
          />
          <TextInput
            placeholder='last name'
            style={[styles.input, styles.w2]}
            onChangeText={(val)=>last_name=val}
          />
        </View>
      </View>
      <TextInput
        placeholder='email'
        style={styles.input}
        onChangeText={(val)=>email=val}
      />
      <TextInput
        placeholder='mobile'
        style={styles.input}
        onChangeText={(val)=>mobile=val}
      />
      <TextInput
        placeholder='password'
        style={styles.input}
        onChangeText={(val)=>password=val}
        secureTextEntry={true}
      />
        <TouchableOpacity
          style={styles.button}
          onPress={()=>{signup()}}
        >
          <Text style={{fontWeight:'bold', textAlign:'center', color:'#fff'}}>SIGN UP</Text>
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
  textWhite: {
    color:'#fff',
    textAlign:'center',
    marginBottom:20
  },
  input: {
    marginBottom:8,
    backgroundColor:'#fff',
    padding:13,
    color:'#1d1d1d',
    width:'100%',
    textAlign:'left',
    borderRadius:14,
  },
  specialInput:{
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  w1:{
    marginRight:"5px"
  },
  w2:{
    marginLeft:"5px"
  },
  button: {
    marginHorizontal:'auto',
    backgroundColor:'#1d1d1d',
    padding:18,
    color:'#ccc',
    width:'100%',
    borderRadius:14,
    marginTop:5,
  }
});
 
export default SignupScreen;