import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigator 