import * as React from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import {Entypo,Ionicons, MaterialCommunityIcons }from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import constant from 'expo-constants';


export default function Header() {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="black"
           barStyle="light-content"
         />
        <View style={styles.logo} >
          <Entypo style={styles.icon} name="youtube" size={32} color="red"/>
          <Text style={styles.text}>Youtube</Text>
        </View>
        <View style={styles.iconView}>
          <Ionicons style={styles.icon} name="md-videocam" size={32} color="black"/>
          <Ionicons style={styles.icon} name="ios-search" size={32} color="black" onPress={()=>navigation.navigate('Search')}/>
          <MaterialCommunityIcons style={styles.icon} name="account-circle" size={32} color="black"/>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop:constant.statusBarHeight,
    backgroundColor: 'white',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 4,

  },
  logo: {
    flex: 1,
    flexDirection: 'row',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:150,
  },
  icon:{
    margin:5,
  },
  text: {
    fontSize:20,
    margin:5,
  }
});
