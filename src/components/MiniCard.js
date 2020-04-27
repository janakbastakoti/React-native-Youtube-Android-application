import * as React from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons }from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MiniCard(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('VideoPlayer',{videoId:props.videoId,title:props.title})}>
    <View style={styles.container} >
      <Image source={{uri: 'https://i.ytimg.com/vi/'+ props.videoId + '/hqdefault.jpg'}} style={styles.img} />
        <View style={styles.viewBox} >
          <Text style={styles.textBox} ellipsizeMode="tail" numberOfLines={3}>{props.title}</Text>
          <Text style={{fontSize:13}}>{props.channelId} </Text>
          <Text style={{fontSize:13}}>views days</Text>
        </View>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    flex: 1,
  },
  img: {
    width: '50%', 
    height: 120,
  },
  textBox: {
    fontSize:18,  
    width:Dimensions.get("screen").width/2,
  },
  viewBox: {
    marginLeft:5,
    marginTop:5,
    marginRight:5,
  }
});


