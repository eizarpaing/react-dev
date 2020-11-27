// import React, { Component, useState, useEffect } from 'react';
// import {Text, View, Animated, TouchableOpacity, StyleSheet, TextInput, Image, Button, ScrollView, FlatList, SectionList, ActivityIndicator} from 'react-native';
// import {StyleSheet,Text,View,Image,TouchableHighlight,Animated} from 'react-native'; //Step 1
// import ModalExample from './modal_example';

// const App = () => {
//     return(
//         <ModalExample/>
//     );
// }
// export default App


import React from 'react'
import { StatusBar, View } from 'react-native';
import PickerExample from './PickerExample';
import { Button, ThemeProvider } from 'react-native-elements';

const RaisedButton = (props) => <Button raised {...props}/>;
const theme = {
   Button: {
     raised: true,
   },
 };

const App = () => {
   return(
      <View style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
         <ThemeProvider theme={theme}>
            <Button title="Hey!" style={{width: "100%", padding: 500}}/>
            <RaisedButton title="Yea"/>
         </ThemeProvider>
      </View>
   );
}

// const App = () => {
//    return (
//        <View>
//            <PickerExample />
//            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "blue" translucent = {true}/>
//        </View>
      
//    )
// }
export default App


// import React, { Component, useState } from 'react';
// import {Text, TouchableOpacity, View, Alert,StyleSheet } from 'react-native';
// // import Modal from 'react-native-modal'; // 2.4.0
// import Modal from 'react-native-modal';

// export default function App() {
//   const [modalVisible, setModalVisible] = useState(false);

//   const modalHeader=(
//     <View style={styles.modalHeader}>
//       <Text style={styles.title}>Delete Your Account</Text>
//       <View style={styles.divider}></View>
//     </View>
//   )

//   const modalBody=(
//     <View style={styles.modalBody}>
//       <Text style={styles.bodyText}>Are you sure you want to delete your account ?</Text>
//     </View>
//   )

//   const modalFooter=(
//     <View style={styles.modalFooter}>
//       <View style={styles.divider}></View>
//       <View style={{flexDirection:"row-reverse",margin:10}}>
//         <TouchableOpacity style={{...styles.actions,backgroundColor:"#db2828"}} 
//           onPress={() => {
//             setModalVisible(!modalVisible);
//           }}>
//           <Text style={styles.actionText}>No</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={{...styles.actions,backgroundColor:"#21ba45"}}>
//           <Text style={styles.actionText}>Yes</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   )

//   const modalContainer=(
//     <View style={styles.modalContainer}>
//       {modalHeader}
//       {modalBody}
//       {modalFooter}
//     </View>
//   )

//   const modal = (
//     <Modal
//       transparent={false}
//       visible={modalVisible}
//       onRequestClose={() => {
//         Alert.alert('Modal has been closed.');
//       }}>
//       <View style={styles.modal}>
//         <View>
//           {modalContainer}
//         </View>
//       </View>
//     </Modal>
// )

//   return (
//     <View style={styles.container}>
      
//       {modal}

//       <TouchableOpacity
//         onPress={() => {
//           setModalVisible(true);
//         }}>
//         <Text>Show Modal</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   modal:{
//     backgroundColor:"#00000099",
//     flex:1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   modalContainer:{
//     backgroundColor:"#f9fafb",
//     width:"80%",
//     borderRadius:5
//   },
//   modalHeader:{
    
//   },
//   title:{
//     fontWeight:"bold",
//     fontSize:20,
//     padding:15,
//     color:"#000"
//   },
//   divider:{
//     width:"100%",
//     height:1,
//     backgroundColor:"lightgray"
//   },
//   modalBody:{
//     backgroundColor:"#fff",
//     paddingVertical:20,
//     paddingHorizontal:10
//   },
//   modalFooter:{
//   },
//   actions:{
//     borderRadius:5,
//     marginHorizontal:10,
//     paddingVertical:10,
//     paddingHorizontal:20
//   },
//   actionText:{
//     color:"#fff"
//   }
// });
// class Panel extends Component{
//     constructor(props){
//         super(props);

//         this.icons = {     //Step 2
//             'up'    : require('./assets/arrow-up.png'),
//             'down'  : require('./assets/arrow-down.png')
//         };

//         this.state = {       //Step 3
//             title       : props.title,
//             expanded    : true
//         };
//     }

//     toggle(){
        
//     }


//     render(){
//         let icon = this.icons['down'];

//         if(this.state.expanded){
//             icon = this.icons['up'];   //Step 4
//         }

//         //Step 5
//         return ( 
//             <View style={styles.container} >
//                 <View style={styles.titleContainer}>
//                     <Text style={styles.title}>{this.state.title}</Text>
//                     <TouchableHighlight 
//                         style={styles.button} 
//                         onPress={this.toggle.bind(this)}
//                         underlayColor="#f1f1f1">
//                         <Image
//                             style={styles.buttonImage}
//                             source={icon}
//                         ></Image>
//                     </TouchableHighlight>

//                 </View>
                
//                 <View style={styles.body}>
//                     {this.props.children}
//                 </View>

//             </View>
//         );
//     }
// }
// export default Panel;

// var Panels = React.createClass({
//     render: function() {
//       return (  //Step 2
//         <ScrollView style={styles.container}>
//           <Panel title="A Panel with short content text">
//             <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
//           </Panel>
//           <Panel title="A Panel with long content text">
//             <Text>Lorem ipsum...</Text>
//           </Panel>
//           <Panel title="Another Panel">
//             <Text>Lorem ipsum dolor sit amet...</Text>
//           </Panel>
//         </ScrollView>
//       );
//     }
//   });

//   AppRegistry.registerComponent('Panels', () => Panels);

// var styles = StyleSheet.create({
//     container   : {
//         backgroundColor: '#fff',
//         margin:10,
//         overflow:'hidden'
//     },
//     titleContainer : {
//         flexDirection: 'row'
//     },
//     title       : {
//         flex    : 1,
//         padding : 10,
//         color   :'#2a2f43',
//         fontWeight:'bold'
//     },
//     button      : {

//     },
//     buttonImage : {
//         width   : 30,
//         height  : 25
//     },
//     body        : {
//         padding     : 10,
//         paddingTop  : 0
//     }
// });
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

//Network with fetch API POST URL
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

//SectionList
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20
//     },
//     sectionHeader: {
//         paddingTop: 2,
//         paddingLeft: 10,
//         paddingRight: 10,
//         paddingBottom: 2,
//         fontSize: 16,
//         fontWeight: 'bold',
//         backgroundColor: 'rgba(247, 247, 247, 1.0)',
//     },
//     item: {
//         padding: 10,
//         fontSize: 14,
//         height: 40,
//     }
// })

// const SectionListBasics = () => {
//     return(
//         <View style= {styles.container}>
//             <SectionList
//                 sections={[
//                     {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
//                     {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//                 ]}
//                 renderItem= {({item}) => <Text style={styles.item}>{item}</Text>}
//                 renderSectionHeader={({section})=><Text style={styles.sectionHeader}>{section.title}</Text>}
//             />
//         </View>
//     );
// }

// export default SectionListBasics
// class Animations extends Component {
//    componentWillMount = () => {
//       this.animatedWidth = new Animated.Value(50)
//       this.animatedHeight = new Animated.Value(100)
//    }
//    animatedBox = () => {
//       Animated.timing(this.animatedWidth, {
//          toValue: 200,
//          duration: 1000
//       }).start()
//       Animated.timing(this.animatedHeight, {
//          toValue: 500,
//          duration: 500
//       }).start()
//    }
//    render() {
//       const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight }
//       return (
//          <TouchableOpacity style = {styles.container} onPress = {this.animatedBox}>
//             <Animated.View style = {[styles.box, animatedStyle]}/>
//          </TouchableOpacity>
//       )
//    }
// }
// export default Animations

// const styles = StyleSheet.create({
//    container: {
//       justifyContent: 'center',
//       alignItems: 'center'
//    },
//    box: {
//       backgroundColor: 'blue',
//       width: 50,
//       height: 100
//    }
// })

