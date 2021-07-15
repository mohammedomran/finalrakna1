import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const HistoryScreen = ({navigation}) => {
  return (
      <View style={styles.homeContainer}>

        <Text style={{ color:'#1d1d1d', textAlign:'left', marginBottom:40 }}>
            Here you can find all of your history at our parking area, we hope to see you again
        </Text>        
        <ScrollView style={{ width:'100%' }}>
        <View style={styles.billContainer}>
          <Text style={styles.textWhite}>
              {`Duration : 2 hourse \nTime : 1:05pm to 3:05pm \nDate : 25 Nov - 2021`}
          </Text>
          <Text style={styles.billText}>
              BILL : 60 LE
          </Text>
        </View>
        <View style={styles.billContainer}>
          <Text style={styles.textWhite}>
              {`Duration : 2 hourse \nTime : 1:05pm to 3:05pm \nDate : 25 Nov - 2021`}
          </Text>
          <Text style={styles.billText}>
              BILL : 60 LE
          </Text>
        </View>
        <View style={styles.billContainer}>
          <Text style={styles.textWhite}>
              {`Duration : 2 hourse \nTime : 1:05pm to 3:05pm \nDate : 25 Nov - 2021`}
          </Text>
          <Text style={styles.billText}>
              BILL : 60 LE
          </Text>
        </View>
        </ScrollView>
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
    paddingVertical:80,
    paddingHorizontal:25,
    backgroundColor:'#eee',
  },
  billContainer: {
    backgroundColor:'#fff',
    marginBottom:15,
    width:'100%',
    padding:20
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
 
export default HistoryScreen;