import React, {Component} from 'react';
import { AppRegistry, View } from 'react-native';

export default class MyApp extends Component {
    render(){
        return(
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                <View style= {{padding: 0, flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}> 
                    <View style= {{padding: 0, flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <View style={{width: 100, height: 100, backgroundColor: 'powderblue'}}/>
                        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}/>
                        <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}}/>
                    </View>
                    <View style= {{padding: 0, flex: 1, flexDirection: 'column', alignItems: 'flex-end'}}>
                        <View style={{width: 100, height: 100, backgroundColor: 'powderblue'}}/>
                        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}/>
                        <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}}/>
                    </View>
                </View>
                <View style= {{padding: 0, flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style= {{padding: 0, flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-end'}}>
                        <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}}/>
                        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}/>
                        <View style={{width: 100, height: 100, backgroundColor: 'powderblue'}}/>
                    </View> 
                    <View style= {{padding: 0, flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                        <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}}/>
                        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}/>
                        <View style={{width: 100, height: 100, backgroundColor: 'powderblue'}}/>
                    </View>
                </View>
            </View>
        );
    }
}