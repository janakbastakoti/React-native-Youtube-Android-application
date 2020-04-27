import * as React from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import {Entypo,Ionicons, MaterialCommunityIcons }from '@expo/vector-icons';
import Header from '../components/Header';
import constant from 'expo-constants';



const Explore = () => {
	return(
		<View>
			<Header  />
			<Text> explore screen</Text>
		</View>
		)

}

export default Explore