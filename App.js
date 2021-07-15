import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import LoginSignupScreen from './screens/LoginSignupScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import DashboardScreen from './screens/DashboardScreen';
import ProfileScreen from './screens/ProfileScreen';
import ParkScreen from './screens/ParkScreen';
import LeaveScreen from './screens/LeaveScreen';
import HistoryScreen from './screens/HistoryScreen';
import LeaveEnterOtpScreen from './screens/LeaveEnterOtpScreen';
import LeaveCorrectOtpScreen from './screens/LeaveCorrectOtpScreen';
import LeaveBillScreen from './screens/LeaveBillScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import firebase from 'firebase/app';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyDuF_skhanPNaDTr0q0LZavp44HCVM-0wg",
authDomain: "rakna-2021.firebaseapp.com",
databaseURL: "https://rakna-2021.firebaseio.com",
projectId: "rakna-2021",
storageBucket: "rakna-2021.appspot.com",
messagingSenderId: "333679398621",
appId: "1:333679398621:web:ab9cf5ad4291d7c57d9534",
measurementId: "G-F3JVGV6T7J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const Stack = createStackNavigator();

export default function App(navigation) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            header:()=>null
          }}
        />
        <Stack.Screen
          name="loginsignup"
          component={LoginSignupScreen}
          options={{
            header:()=>null
          }}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{
            header:()=>null
          }}
        />
        <Stack.Screen
          name="signup"
          component={SignupScreen}
          options={{
            header:()=>null
          }}
        />
        <Stack.Screen
          name="dashboard"
          component={DashboardScreen}
          options={{
            header:()=>null
          }}
        />


        <Stack.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            header:()=>null
          }}
        />
        <Stack.Screen
          name="park"
          component={ParkScreen}
          options={{
            header:()=>null
          }}
        />
        <Stack.Screen
          name="leave"
          component={LeaveScreen}
          options={{
            header:()=>null
          }}
        />
        <Stack.Screen
          name="history"
          component={HistoryScreen}
          options={{
            header:()=>null
          }}
        />

        
        <Stack.Screen
          name="leaveenterotp"
          component={LeaveEnterOtpScreen}
          options={{
            header:()=>null
          }}
        />
        <Stack.Screen
          name="leavecorrectotp"
          component={LeaveCorrectOtpScreen}
          options={{
            header:()=>null
          }}
        />
        <Stack.Screen
          name="leavebill"
          component={LeaveBillScreen}
          options={{
            header:()=>null
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  
});
