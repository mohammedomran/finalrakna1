import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity, TextInput } from 'react-native';

const LeaveBillScreen = ({navigation}) => {
  return (
      <View style={styles.homeContainer}>
        <Text style={styles.textWhite}>
            {`Your bill is here \nDuration : 2 hourse \nTime : 1:05pm to 3:05pm \nDate : 25 Nov - 2021`}
        </Text>
        <Text style={styles.billText}>
            BILL : 60 LE
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>{navigation.navigate('leavebill')}}
        >
          <Text style={{fontWeight:'bold', textAlign:'center', color:'#fff'}}>OKAY</Text>
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
    marginBottom:5,
    textAlign:'left',
    width:'100%',
    fontSize:18,
    lineHeight:29
  },
  billText: {
    color:'#fff',
    marginBottom:20,
    textAlign:'left',
    backgroundColor:'red',
    paddingHorizontal:25,
    paddingVertical:10,
    marginRight:'auto'
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
 
export default LeaveBillScreen;