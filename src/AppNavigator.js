import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Screens/Splashscreen/Splash';
import Main from './Screens/Main';
import Add from './tabs/Add';



const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Splash" component={Splash} 
          options={{headerShown:false}}
          /> */}
          <Stack.Screen name='Main' component={Main} 
          options={{headerShown:false}} />
           
          <Stack.Screen name='Add' component={Add}
           options={{headerShown:false}}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default AppNavigator