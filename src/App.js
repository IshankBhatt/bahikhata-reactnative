/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import JobScreen from './screens/newJob'
import AllJobScreen from './screens/allJobs'
import EditJob from './screens/editJob'
import Feather from 'react-native-vector-icons/Feather'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = ()=>{
  return (
    <Tab.Navigator
    screenOptions={({route})=>({
      tabBarIcon: ({color})=>{
        let iconName;
        if(route.name==='Home'){
          iconName='home'
        }else if(route.name==='New'){
          iconName='plus-circle'
        }
        return <Feather name={iconName} size={40} color={color}/>
      },
    })}
    tabBarOptions={{
      activeTintColor:'tomato',
      inactiveTintColor:'gray',
    }}
    >
      <Tab.Screen name="Home" component={AllJobScreen} options={{headerShown:false}}/>
      <Tab.Screen name="New" component={JobScreen} options={{headerShown:false}}/>
    </Tab.Navigator>
  )
}

const EditNavigator = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabNavigator} options={{headerShown:false}}/>
      <Stack.Screen name="Edit" component={EditJob}/>
    </Stack.Navigator>
  );
}

const Navigation = ()=>{
  return ( 
  <NavigationContainer>
    <EditNavigator/>
  </NavigationContainer>
  );
}

const App = () => {

  return (
    <>
      <Navigation/>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
