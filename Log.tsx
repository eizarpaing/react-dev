import React from 'react';
import {View, Text } from 'react-native';
import { Video } from 'expo-av';

export default function Log(props:any){
    return (
        <View>
        <Video
              source={{uri: `${props.videoUrl}`}}
              volume={1.0}
              resizeMode="cover"
              shouldPlay
              useNativeControls
              style={{ paddingTop: "20px", alignSelf: "center", width: "100%", height: "70%"}}
              posterStyle={{ paddingTop: "20px", alignSelf: "center", width: "100%", height: "70%"}}>
            </Video>
            <Text>{props.videoUrl}</Text>
      </View>);
}