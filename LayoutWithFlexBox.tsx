import React from 'react'
import { StatusBar, View } from 'react-native';

const App = () => {
   return(
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', margin: '5px', alignItems: 'flex-start'}}>
         <View style={{ justifyContent: 'flex-start', flexGrow: 3, flexBasis: '200', height: 50, backgroundColor: 'steelblue', margin: '5px',  alignSelf: 'flex-start'}}/>
         <View style={{ justifyContent: 'flex-start', width: 200, height: 50, backgroundColor: 'skyblue', margin: '5px' }}/>
         <View style={{ justifyContent: 'flex-start', width: 100, height: 50, backgroundColor: 'steelblue', margin: '5px' }}/>
         <View style={{ justifyContent: 'flex-start', width: 100, height: 50, backgroundColor: 'skyblue', margin: '5px' }}/>
         <View style={{ justifyContent: 'flex-start', width: 100, height: 50, backgroundColor: 'steelblue', margin: '5px' }}/>
         <View style={{ justifyContent: 'flex-start', width: 100, height: 50, backgroundColor: 'skyblue', margin: '5px' }}/>
         <View style={{ justifyContent: 'flex-start', width: 100, height: 50, backgroundColor: 'steelblue', margin: '5px' }}/>
         <View style={{ justifyContent: 'flex-start', width: 100, height: 50, backgroundColor: 'skyblue', margin: '5px' }}/>
         <View style={{ justifyContent: 'flex-start', width: 200, height: 50, backgroundColor: 'steelblue', margin: '5px' }}/>
         <View style={{ justifyContent: 'flex-start', width: 200, height: 50, backgroundColor: 'skyblue', margin: '5px' }}/>
         <View style={{ justifyContent: 'flex-start', width: 100, height: 50, backgroundColor: 'steelblue', margin: '5px' }}/>
         <View style={{ justifyContent: 'flex-start', width: 100, height: 50, backgroundColor: 'skyblue', margin: '5px' }}/>
         <View style={{ justifyContent: 'flex-start', width: 200, height: 50, backgroundColor: 'steelblue', margin: '5px' }}/>
         <View style={{ justifyContent: 'flex-start', width: 50, height: 50, backgroundColor: 'red', margin: '5px', alignSelf: 'flex-end' }}/>
      </View>
   );
}
export default App