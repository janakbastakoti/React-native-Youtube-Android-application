import * as React from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import { useSelector } from 'react-redux';

export default function HomeScreen() {
  const  cardData = useSelector(state=>{
    return state
  })

  return (
    <View style={styles.container}>
      <Header  />
      <FlatList data={cardData}
      renderItem = {({item})=>{
        return <Card 
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
    backgroundColor: '#F5FCFF',
    flex: 1,
  },

});
