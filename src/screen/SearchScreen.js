import React, {useState} from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TextInput, FlatList, ActivityIndicator,StatusBar } from 'react-native';
import {Entypo,Ionicons, MaterialCommunityIcons }from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux';
import constant from 'expo-constants';
import MiniCard from '../components/MiniCard';
import { useNavigation } from '@react-navigation/native';


export default function SearchScreen() {
  const navigation = useNavigation();
  const[value,setValue]= useState("")
  // const[miniCardData,setMiniCardData] = useState([])
  const dispatch = useDispatch()
  const  miniCardData = useSelector(state=>{
    return state
  })
  const [loading,setLoading]= useState(false)


  const fetchData = () => {
    setLoading(true)
    fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q='+ value +'&type=video&key=AIzaSyAU_hB61QmHNAdMLVNgSQoVYv98cglMGm0')
    .then(res=>res.json())
    .then(data=>{
      setLoading(false)   
      dispatch({type:"add",payload:data.items})  
      // setMiniCardData(data.items)

    })
  }
  return (
    <View style={styles.container}>
      <StatusBar
         backgroundColor="black"
         barStyle="light-content"
       />
      <View style={styles.searchHeader}>
        <Ionicons style={styles.backIcon} name="ios-arrow-round-back" size={32} color="black"
          onPress={()=>navigation.goBack()}/>
        <TextInput placeholder="hello" style={styles.inputBox} onChangeText={(text)=>setValue(text)}  />
        <Ionicons style={styles.sendIcon} name="md-send" size={32} color="black" onPress={()=>fetchData()}/>
      </View>
      {loading? <ActivityIndicator style={{margin:5}}  size="large" color="red"  />:null}
      <FlatList data={miniCardData}
      renderItem = {({item})=>{
        return <MiniCard 
        videoId = {item.id.videoId}
        title= {item.snippet.title}
        channelId={item.snippet.channelTitle}
        
        />
      }}
      keyExtractor = {item=> item.id.videoId}
      /> 
    </View>
  );
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
    margin:5
  },
  inputBox: {
    margin:5,
    marginLeft:20,
    width:230,
    backgroundColor: '#e6e6e6',
  },
  sendIcon:{
    margin:5, 
    marginLeft:5,
  }
});



