import React, { Component, useState, useEffect } from 'react';
import {Text, View,StyleSheet, TextInput, Image, Button, ScrollView, FlatList, ActivityIndicator, SectionList} from 'react-native';

// const Cat = (props) => {
//     const [isHungry, setIsHungry] = useState(true);
//     state = { isHungry: true}
//     return(
//         <View>
//             <Text>I am {props.name}, and I am {isHungry ? "hungry" : "full"}</Text>
//             <Button onPress={()=>{
//                 setIsHungry(false);
//             }}
//             disabled={!isHungry}
//             title={isHungry ? "Pour me some milk" : "Thank you"}></Button>
//         </View>
//     );
// }

// const App = () => {
//     return(
//         <View>
//             <Text>Welcome!</Text>
//             <Cat name="Maru"/>
//             <Cat name="Jellylorum"/>
//             <Cat name="Spot"/>
//             <Cat name="Eizar"/>
//             <Cat name="MgPwa"/>
//             <Image source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
//                 style={{width: 200, height: 200}}
//             />
//             <Text>
//                 Hello, I am your cat!
//             </Text>
//         </View>
//     );
// }

// class Cat extends Component {
//     state = {isHungry: true};
//     render(props) {
//         return(
//             <View>
//                 <Text>I am {this.props.name}, and I am {this.state.isHungry ? "hungry" : "Full"}</Text>
//                 <Button
//                     onPress={()=> {
//                         this.setState({isHungry: false});
//                     }}
//                     disabled={!this.state.isHungry}
//                     title={
//                         this.state.isHungry ? "Milk please" : "Thank you"
//                     }
//                 />
//             </View>
//         );
//     }
// }

// class App extends Component {
//     render(){
//         return(
//             <>
//             <Cat name="Mg Key"/>
//             <Cat name="Mg Pwa"/>
//             </>
//         );
//     }
// }

// const App = () => {
//     const [value, setValue] = useState('');
//     return(
//         <View style={{padding: 10}}>
//             <TextInput 
//             style={{height: 40}}
//             placeholder="Type your Name"
//             onChangeText={text => setValue(text)}
//             defaultValue={value}
//         />
//         <Text style={{padding: 10, fontSize: 20}}>
//             {value.split(' ').map((word)=>word).join('#')}
//         </Text>
//         </View>
//     );
// }

// export default class App extends Component {
//     _onPressButton() {
//         alert('You tapped the button!');
//     }
//     render(){
//         return(
//             <View style={styles.container}>
//                 <View style={styles.buttonContainer}>
//                     <Button 
//                         onPress={this._onPressButton}
//                         title="Press Me">
//                     </Button>
//                 </View>
//                 <View style={styles.buttonContainer}>
//                     <Button 
//                         onPress={this._onPressButton}
//                         title="This looks great!">
//                     </Button>
//                 </View>
//                 <View style={styles.alternativeLayoutButtonContainer}>
//                     <Button onPress={this._onPressButton}
//                         title="OK"/>
//                     <Button onPress={this._onPressButton}
//                         title="Cancel"/>
//                 </View>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     buttonContainer: {
//         margin: 20
//     },
//     alternativeLayoutButtonContainer: {
//         margin: 20,
//         flexDirection: 'row',
//         justifyContent: 'space-between'
//     }
// });

//scrollview
// export default class App extends Component {
//     render(){
//         const logo = {
//             uri: "https://reactnative.dev/img/tiny_logo.png",
//             width: 64,
//             height: 64
//         };
//         return(
//             <ScrollView>
//                 <Text style={{fontSize: 60}}>Scroll me please</Text>
//                 <Image source={logo}/>
//                 <Image source={logo}/>
//                 <Image source={logo}/>
//                 <Image source={logo}/>
//                 <Image source={logo}/>
//                 <Text style={{fontSize: 60}}>Scroll me please</Text>
//                 <Image source={logo}/>
//                 <Image source={logo}/>
//                 <Image source={logo}/>
//                 <Image source={logo}/>
//                 <Image source={logo}/>
//                 <Text style={{fontSize: 60}}>Scroll me please</Text>
//                 <Image source={logo}/>
//                 <Image source={logo}/>
//                 <Image source={logo}/>
//                 <Image source={logo}/>
//                 <Image source={logo}/>
//                 <Text style={{fontSize: 60}}>Scroll me please</Text>
//                 <Image source={logo}/>
//                 <Image source={logo}/>
//                 <Image source={logo}/>
//                 <Image source={logo}/>
//                 <Image source={logo}/>
//                 <Text style={{fontSize: 60}}>Scroll me please</Text>
//                 <Image source={logo}/>
//                 <Image source={logo}/>
//                 <Image source={logo}/>
//                 <Image source={logo}/>
//                 <Image source={logo}/>
//             </ScrollView>
//         );
//     }
// }

//Listviews
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 200
//     },
//     item: {
//         padding: 10,
//         fontSize: 18,
//         height:50,
//     }
// });

// const FlatListBasics = () => {
//     return(
//         <View style={styles.container}>
//             <FlatList
//                 data={[
//                     {key: 'Devin'},
//                     {key: 'Dan'},
//                     {key: 'Jackson'},
//                     {key: 'James'},
//                     {key: 'Joel'},
//                     {key: 'John'},
//                     {key: 'Jillian'},
//                     {key: 'Jimmy'},
//                     {key: 'Julie'},
//                     {key: 'Devin'},
//                     {key: 'Dan'},
//                     {key: 'Jackson'},
//                     {key: 'James'},
//                     {key: 'Joel'},
//                     {key: 'John'},
//                     {key: 'Jillian'},
//                     {key: 'Jimmy'},
//                     {key: 'Julie'},
//                     {key: 'Devin'},
//                     {key: 'Dan'},
//                     {key: 'Jackson'},
//                     {key: 'James'},
//                     {key: 'Joel'},
//                     {key: 'John'},
//                     {key: 'Jillian'},
//                     {key: 'Jimmy'},
//                     {key: 'Julie'},
//                     {key: 'Devin'},
//                     {key: 'Dan'},
//                     {key: 'Jackson'},
//                     {key: 'James'},
//                     {key: 'Joel'},
//                     {key: 'John'},
//                     {key: 'Jillian'},
//                     {key: 'Jimmy'},
//                     {key: 'Julie'},
//                     {key: 'Devin'},
//                     {key: 'Dan'},
//                     {key: 'Jackson'},
//                     {key: 'James'},
//                     {key: 'Joel'},
//                     {key: 'John'},
//                     {key: 'Jillian'},
//                     {key: 'Jimmy'},
//                     {key: 'Julie'},
//                 ]}
//                 renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//                 />
//         </View>
//     );
// }

// export default FlatListBasics

// const App = () => {
//     const [isLoading, setLoading] = useState(true);
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch('https://reactnative.dev/movies.json')
//         .then((response) => response.json())
//         .then((json)=> setData(json.movies))
//         .catch((error) => console.error(error))
//         .finally(()=> setLoading(false));
//     }, []);

//     return(
//         <View style={{flex: 1, padding: 50}}>
//             {isLoading ? <ActivityIndicator/> : 
//                 <FlatList 
//                     data={data}
//                     keyExtractor={({id}, index) => id}
//                     renderItem={({item}) => (
//                         <Text>{item.title}, {item.releaseYear}</Text>
//                     )}
//                 />
//             }
//         </View>
//     );
// }

// export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247, 247, 247, 1.0)',
    },
    item: {
        padding: 10,
        fontSize: 14,
        height: 40,
    }
})

const SectionListBasics = () => {
    return(
        <View style= {styles.container}>
            <SectionList
                sections={[
                    {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
                    {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                ]}
                renderItem= {({item}) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section})=><Text style={styles.sectionHeader}>{section.title}</Text>}
            />
        </View>
    );
}

export default SectionListBasics
