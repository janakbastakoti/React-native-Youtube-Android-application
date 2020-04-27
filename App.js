import React from 'react';
import 'react-native-gesture-handler';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {MaterialIcons }from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {reducer} from './src/components/reducers/reducer';
import {Provider} from 'react-redux';
import { createStore } from 'redux'


import HomeScreen from './src/screen/homeScreen';
import SearchScreen from './src/screen/SearchScreen';
import Explore from './src/screen/Explore';
import Subscribe from './src/screen/Subscribe';
import VideoPlayer from './src/screen/VideoPlayer';

import constant from 'expo-constants';


const store = createStore(reducer);
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootHome = () => {
  return(
      <Tab.Navigator
         screenOptions={({ route }) => ({
          tabBarIcon: ({  color}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName ='home'; 
            } else if (route.name === 'Explore') {
              iconName = 'explore';
            }else if (route.name === 'Subscribe') {
              iconName = 'subscriptions';
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={32} color={color}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Subscribe" component={Subscribe} />
      </Tab.Navigator>

    )
}


function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="RootHome" component={RootHome} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
    </Stack.Navigator>
    </NavigationContainer>
   </Provider>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop:constant.statusBarHeight,

  },
});
