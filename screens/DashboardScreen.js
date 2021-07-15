import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const DashboardScreen = ({navigation}) => {

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@token')
      if(value !== null) {
        // value previously stored
        return value;
      }
    } catch(e) {
      // error reading value
    }
  }
  
  
  const items = [
      {id:Math.random().toString(), title:"profile", image:"https://i.imgur.com/Mk6hwuj.png", goTo:"profile"},
      {id:Math.random().toString(), title:"Park", image:"https://i.imgur.com/QtITIij.png", goTo:"park"},
      {id:Math.random().toString(), title:"leave", image:"https://i.imgur.com/XG9S9Ec.png", goTo:"leaveenterotp"},
      {id:Math.random().toString(), title:"history", image:"https://i.imgur.com/baeUjiW.png", goTo:"history"},
      {id:Math.random().toString(), title:"logout", image:"https://i.imgur.com/LOpzFFH.png", goTo:"login"},
  ];
  return (
      <View style={styles.homeContainer}>

        <Text style={{ fontWeight:'bold', fontSize:25, marginBottom:50, textAlign:'left', width:'100%' }}>Hi, Mohammed</Text>
        <FlatList
        contentContainerStyle={styles.items}
        numColumns={3}
        data={items}
        renderItem={(item) =>
            <TouchableOpacity style={styles.item} onPress={()=>{navigation.navigate(item.item.goTo)}}
            >
                <Image
                source={{uri: item.item.image}}
                style={{ width: 40, height: 40, marginHorizontal:'auto' }}
                />
                <Text style={styles.textCenter}>{item.item.title}</Text>
            </TouchableOpacity>
        }
    />  
      </View>
  );
};
 
const styles = StyleSheet.create({
  homeContainer: {
    width:'100%',
    backgroundColor:'#eee',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    margin:'auto',
    paddingVertical:80,
    paddingHorizontal:25
  },
  textCenter: {
    textAlign:'center',
  },
  button: {
    marginHorizontal:'auto',
    backgroundColor:'#fff',
    padding:13,
    color:'#ccc',
    width:'100%',
    textAlign:'center',
    borderRadius:14,
    marginTop:5
  },
  item: {
      backgroundColor:'#fff',
      borderRadius:14,
      width:80,
      height:80,
      padding:5,
      marginVertical:10,
      marginHorizontal:10,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
  },
  items: {
      alignItems:'flex-start',

  },
});
 
export default DashboardScreen;