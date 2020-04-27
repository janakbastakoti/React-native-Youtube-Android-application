import * as React from 'react';
import { Platform, StyleSheet, Text, View, StatusBar,Dimensions } from 'react-native';
import {Entypo,Ionicons, MaterialCommunityIcons }from '@expo/vector-icons';

import { WebView } from 'react-native-webview';

import Header from '../components/Header';
import constant from 'expo-constants';
import { useNavigation } from '@react-navigation/native';


const VideoPlayer = ({route}) => {
	const navigation = useNavigation();
	const {videoId, title} = route.params
	console.log(videoId)
	return(
		<View style={styles.container}>
			<View style={styles.searchHeader}>
		        <Ionicons style={styles.backIcon} name="ios-arrow-round-back" size={32} color="black"
		          onPress={()=>navigation.goBack()}/>
	      	</View>
			<View style={{width:'100%',height:300}}>
				<WebView
					javaScriptEnabled={true}
					domStorageEnabled={true}
			        source={{ uri:'https://www.youtube.com/embed/'+videoId}}
			        style={{ marginTop: 20 }}
			    />
			</View>
			<View>
				<Text sytyle={{width:350}}>{title}</Text>
			</View>
		</View>
		)

}

const styles = StyleSheet.create({
  container: {
    // marginTop:constant.statusBarHeight,
    flex: 1,
  },
  searchHeader:{
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    height: 45,       
    elevation:6,               
    justifyContent: 'space-between',  
  },
  backIcon:{
    margin:5,
    paddingLeft:10
  }
});


export default VideoPlayer