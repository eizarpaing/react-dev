import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function App() {
  const logo = require("./assets/favicon.png");
  const screen = require("./assets/screen.png");

  const postTestApi = () => {
    alert("post test");
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ title: 'this is testing'}),
    }).then(response => {
      alert(response);
    }).catch(error => {
      alert("last error" + error.toString());
    });
  }

  const getMoviesFromApi = () => {
    return fetch('https://reactnative.dev/movies.json')
    .then(response => {
      alert(response);
      alert('Response: ' + response);
    })
    .catch((error) => {
      alert(error);
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "column", padding: "50px"}}>
        <img style={{width: '138px', height: '46px', marginBottom: "20px"}} src={logo}></img>
        <ScrollView>
          <View style={{paddingTop: '20px'}}>
            <Form>
              <Form.Group>
                <Form.Label style={{ fontSize: "14px" }}>name</Form.Label>
                <View style={{ marginBottom: "20px" }}>
                  <Form.Control type="text" placeholder="enter name" onChange={({target}) => setName(target.value)} value={name} style={{ height: "35px", padding: "0px 10px" }}/>
                </View>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "14px" }}>type</Form.Label>
                <View style={{ marginBottom: "20px" }}>
                  <Form.Control as="select" placeholder="enter type" style={{ height: "35px", padding: "0px 10px"}}>
                    <option>a</option>
                    <option>b</option>
                  </Form.Control>
                </View>
              </Form.Group>
              <Button onClick={postTestApi} variant="primary" type="submit" style={{ height: "40px", width: "100%", borderRadius: "20px", backgroundColor: "#333333", color: "#FFFFFF", fontSize: "14px", marginTop: "10px" }}>
              Create
              </Button>
            </Form>
	        </View>
        </ScrollView>
      </View>
      <View style={styles.secondContainer}>
        <View style={{padding: "50px", position: "fixed"}}>
          <Text style={{fontSize: "25px", fontWeight: "bold", color: "#fff"}}>
          Testing Page{"\n"}
          Main Page
          </Text>
          <button onClick={postTestApi} type="submit" style={{ height: "40px", width: "100%", borderRadius: "20px", backgroundColor: "#333333", color: "#FFFFFF", fontSize: "14px", marginTop: "10px" }}>
            Create
         </button>
          <img style={{paddingTop: "20px", alignSelf: "center", width: "70%", height: "70%"}} src={screen}></img>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
  },
  secondContainer: {
    flex: 3,
    flexDirection: "column",
    backgroundColor: "#009B63",
    padding: "40px",
    textAlign: "center",
  },
  buttonStyle: {
    height: "40px",
    width: "100%",
    backgroundColor: "#333333",
    color: "#FFFFFF",
    fontSize: "14px"
  }
});