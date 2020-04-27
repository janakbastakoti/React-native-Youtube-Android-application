import * as React from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions,TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons }from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function Card(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('VideoPlayer',{videoId:props.videoId,title:props.title})}>
    <View style={styles.container} >
      <Image source={{uri: 'https://i.ytimg.com/vi/'+ props.videoId + '/hqdefault.jpg'}} style={styles.img} />
      <View style={{flexDirection: 'row',margin:5}}>
        <View>
          <MaterialCommunityIcons style={{margin:5}} name="account-circle" size={32} color="#212121"/>
        </View>
        <View style={{marginLeft:5,marginTop:5,marginRight:5}}>
          <Text style={{fontSize:20, width:Dimensions.get("screen").width-90,}} ellipsizeMode="tail" 
          numberOfLines={2} >{props.title}</Text>
          <Text>{props.channelId} views days</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
  img: {
    width: '100%', 
    height: 200,
  },

});


