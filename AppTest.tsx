import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Video } from 'expo-av';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [videoUrl, setVideoUrl] = useState('');
  const [data, setData] = useState([]);

  const [clinicName, setClinicName] = useState('');
  const [nameOp, setNameOp] = useState('');
  const [treatment, setTreatment] = useState('');

  const logo = require("./assets/favicon.png");
  const screen = require("./assets/screen.png");
  const url = "https://usa-api.idomoo.com/api/v2/storyboards/generate";

  const requestData = {
                    "storyboard_id": "36796",
                    "output": {
                        "video": [
                            {
                                "height": 1080,
                                "video_type": "mp4",
                                "landing_page_id": 5030
                            }
                        ]
                    },
                    "data": [
                        {
                            "key": "clinic_name",
                            "val": clinicName
                        },
                        {
                            "key": "name_op",
                            "val": nameOp
                        },
                        {
                            "key": "treatment",
                            "val": treatment
                        }
                    ]
                };

  const createVideo = async () => {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic MzY4Mzo5ZlhWbUIxSWlNYjVmYmYyMGY2N2QxNGEyY2M4YWM4YmJmYTM2MzVlOGU5RUpYTEFuV3Fa',
      },
      body: JSON.stringify(requestData),
    }).then((response) => response.json())
    .then((responseJson) => {
      let videoURL = responseJson.output.video[0].links.url;
      setVideoUrl(videoURL);
      setLoading(false);
      setData(responseJson.output.video);
    })
    .catch((error) =>{
      console.error(error);
    });
  };

  const postTestApi = async () => {
   await fetch('https://facebook.github.io/react-native/movies.json')
   .then((response) => response.json())
   .then((responseJson) => {
      alert(responseJson.movies);
   })
   .catch((error) =>{
     console.error(error);
   });
  }

  const getMoviesFromApi = () => {
   return fetch('https://reactnative.dev/movies.json')
   .then((response) => response.json())
   .then((responseJson) => {
      alert(responseJson.movies);
      alert(responseJson.title);
      alert(responseJson.movies[0]);
      alert(responseJson.movies[0].title);
   })
   .catch((error) =>{
     console.error(error);
   });
  };

  const handleSubmit=(v:any)=>{
    v.preventDefault();
    console.log(v);
    createVideo();
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "column", padding: "50px" }}>
        <img style={{ width: '20%', height: '10%', marginBottom: "20px" }} src={logo}></img>
        <ScrollView>
          <View style={{ paddingTop: '20px' }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label style={{ fontSize: "14px" }}>clinic</Form.Label>
                <View style={{ marginBottom: "20px" }}>
                  <Form.Control type="text" placeholder="clinic" onChange={({target}) => setClinicName(target.value)} value={clinicName} style={{ height: "35px", padding: "0px 10px" }}/>
                </View>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "14px" }}>Op</Form.Label>
                <View style={{ marginBottom: "20px" }}>
                  <Form.Control type="text" placeholder="Op" onChange={({target}) => setNameOp(target.value)} value={nameOp} style={{ height: "35px", padding: "0px 10px" }}/>
                </View>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "14px" }}>treatment</Form.Label>
                <View style={{ marginBottom: "20px" }}>
                  <Form.Control type="text" placeholder="treatment" onChange={({target}) => setTreatment(target.value)} value={treatment} style={{ height: "35px", padding: "0px 10px" }}/>
                </View>
              </Form.Group>
              <Button type="submit" variant="primary" style={{ height: "40px", width: "100%", borderRadius: "20px", backgroundColor: "#333333", color: "#FFFFFF", fontSize: "14px", marginTop: "10px" }}>
                Side Create
              </Button>
            </Form>
          </View>
        </ScrollView>
      </View>
      <View style={styles.secondContainer}>
        <View style={{padding: "50px", position: "fixed", width: "70%" }}>
          <View>
            <Text style={{fontSize: "25px", fontWeight: "bold", color: "#fff", alignSelf: "center"}}>
              Testing Video
            </Text>
          </View>
          <View>
            {isLoading ? <img style={{ paddingTop: "30px", alignSelf: "center", width: "50%", height: "50%"}} src={screen}></img> : 
            <Video
            source={{uri: videoUrl}}
            rate={1.0}
            volume={1.0}
            resizeMode="cover"
            shouldPlay
            progressUpdateIntervalMillis={5000}
            useNativeControls
            style={{ paddingTop: "30px", alignSelf: "center", width: "100%", height: "500px"}}>
          </Video>
            }
          </View>
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