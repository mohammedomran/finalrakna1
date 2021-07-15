import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({navigation}) => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@token')
      if(value !== null) {
        // value previously stored
        getUserData(value);
        token=value;
      }
    } catch(e) {
      // error reading value
    }
  }
  getData()

  const getUserData = (token) => {
    fetch('http://localhost:8000/api/users/show', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "api_pass":"UKyu8yu9dfsHN98RM5f4g5e64bhJGFJKF5h6j41k65hj",
        "token":token,
      })
    }).then((response) => response.json())
    .then((json) => {
      //console.log(json);
      if(json.code==200) {
        setFirstName(json.user.first_name)
        setLastName(json.user.last_name)
        setEmail(json.user.email)
        setMobile(json.user.mobile)
      }
    });
  };
  const updateData = () => {
    fetch('http://localhost:8000/api/users/update', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "api_pass":"UKyu8yu9dfsHN98RM5f4g5e64bhJGFJKF5h6j41k65hj",
        "token":token,
        "first_name":first_name,
        "last_name":last_name,
        "mobile":mobile,
        "email":email,
      })
    }).then((response) => response.json())
    .then((json) => {
      console.log(json);
      if(json.code==200) {
        alert("Data updated successfully");
      }
    });
  };


  return (
      <View style={styles.homeContainer}>
        <Text style={styles.textWhite}>
          Hi, here you can find all of your data and you can edit it then press update button.
        </Text>
        <TextInput
        placeholder='first name'
        style={styles.input}
        value={first_name}
        onChangeText={(val)=>setFirstName(val)}
        />
        <TextInput
        placeholder='last name'
        style={styles.input}
        value={last_name}
        onChangeText={(val)=>setLastName(val)}
        />
        <TextInput
          placeholder='email'
          style={styles.input}
          value={email}
          onChangeText={(val)=>setEmail(val)}
        />
        <TextInput
          placeholder='mobile'
          style={styles.input}
          value={mobile}
          onChangeText={(val)=>setMobile(val)}
        />
        
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
 
export default ProfileScreen;