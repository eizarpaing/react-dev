import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.bigBlue}>Hello Ei Zar Paing</Text>
        <StatusBar style="auto" />
      </View>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
      <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}/>
      <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}}/>
      <View style={{ paddingTop: 50 }}>
      <Text>
        Try editing me! 🎉
      </Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 50,
  },
});