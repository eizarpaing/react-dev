import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Video } from 'expo-av';
import Log from './Log';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [videoUrl, setVideoUrl] = useState('');
  const [data, setData] = useState([]);
  const [familyName, setFamilyName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [kaisou, setKaisou] = useState('平家');
  const [kenchikuCost, setKenchikuCost] = useState('');
  const [hensaiPlan, setHensaiPlan] = useState('');
  const [kenchikuchi, setKenchikuchi] = useState('');
  const [tsuboPlan, setTsuboPlan] = useState('');
  const [jikoshikin, setJikoshikin] = useState('');
  const [kinriPlan, setKinriPlan] = useState('');
  const [gaihekiPlan, setGaihekiPlan] = useState('モルタル+ストレート');
  const [loanMochiie, setLoanMochiie] = useState('');
  const [yachin, setYachin] = useState('');
  const [chusyajo, setChusyajo] = useState('');
  const [mochiie, setMochiie] = useState('');
  const [tochiPrice, setTochiPrice] = useState('');
  const [atamakin, setAtamakin] = useState('');

  const logo = require("./assets/favicon.png");
  const screen = require("./assets/screen.png");
  const url = "https://usa-api.idomoo.com/api/v2/storyboards/generate";

  const requestData = {
    "storyboard_id": 39883,
    "output": {
      "video": [
        {
          "height": 540,
          "video_type": "mp4"
        }
      ]
    },
    "data": [
      {
        "key": "family_name",
        "val": familyName
      },
      {
        "key": "first_name",
        "val": firstName
      },
      {
        "key": "yachin",
        "val": yachin
      },
      {
        "key": "chusyajo",
        "val": chusyajo
      },
      {
        "key": "mochiie",
        "val": mochiie
      },
      {
        "key": "atamakin",
        "val": atamakin
      },
      {
        "key": "tochi_price",
        "val": tochiPrice
      },
      {
        "key": "kaisou",
        "val": kaisou
      },
      {
        "key": "kenchiku_cost",
        "val": kenchikuCost
      },
      {
        "key": "hensai_plan",
        "val": hensaiPlan
      },
      {
        "key": "kenchikuchi",
        "val": kenchikuchi
      },
      {
        "key": "tsubo_plan",
        "val": tsuboPlan
      },
      {
        "key": "jikoshikin",
        "val": jikoshikin
      },
      {
        "key": "kinri_plan",
        "val": kinriPlan
      },
      {
        "key": "gaiheki_plan",
        "val": gaihekiPlan
      },
      {
        "key": "loan_mochiie",
        "val": loanMochiie
      }
    ]
  };

  const setAllData = async (responseJson: any) => {
    let videoURL = responseJson.output.video[0].links.url;
    let replaced = videoURL.replace('liv', 'v');
    await setVideoUrl(replaced);
    await setLoading(false);
    await setData(responseJson.output.video);
  }
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
        setTimeout(() => setAllData(responseJson), 3000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const postTestApi = async () => {
    await fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson.movies);
      })
      .catch((error) => {
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
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = async (v: any) => {
    v.preventDefault();
    await createVideo();
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "column", padding: "50px" }}>
        <img style={{ width: '138px', height: '46px', marginBottom: "20px" }} src={logo}></img>
        <ScrollView>
          <View style={{ paddingTop: '20px' }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label style={{ fontSize: "14px" }}>苗字</Form.Label>
                <View style={{ marginBottom: "20px" }}>
                  <Form.Control type="text" placeholder="山田" onChange={({ target }) => setFamilyName(target.value)} value={familyName} style={{ height: "35px", padding: "0px 10px" }} />
                </View>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "14px" }}>お名前</Form.Label>
                <View style={{ marginBottom: "20px" }}>
                  <Form.Control type="text" placeholder="太郎" onChange={({ target }) => setFirstName(target.value)} value={firstName} style={{ height: "35px", padding: "0px 10px" }} />
                </View>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "14px" }}>階層</Form.Label>
                <View style={{ marginBottom: "20px" }}>
                  <Form.Control as="select" placeholder="選択してください" onChange={({ target }) => setKaisou(target.value)} value={kaisou} defaultValue="平家" style={{ height: "35px", padding: "0px 10px" }}>
                    <option>平家</option>
                    <option>2階</option>
                  </Form.Control>
                </View>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "14px" }}>建築費</Form.Label>
                <View style={{ marginBottom: "20px" }}>
                  <Form.Control type="text" placeholder="3,500万円" onChange={({ target }) => setKenchikuCost(target.value)} value={kenchikuCost} style={{ height: "35px", padding: "0px 10px" }} />
                </View>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "14px" }}>返済年数</Form.Label>
                <View style={{ marginBottom: "20px" }}>
                  <Form.Control type="text" placeholder="35" onChange={({ target }) => setHensaiPlan(target.value)} value={hensaiPlan} style={{ height: "35px", padding: "0px 10px" }} />
                </View>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "14px" }}>建築地</Form.Label>
                <View style={{ marginBottom: "20px" }}>
                  <Form.Control type="text" placeholder="東京都" onChange={({ target }) => setKenchikuchi(target.value)} value={kenchikuchi} style={{ height: "35px", padding: "0px 10px" }} />
                </View>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "14px" }}>坪数</Form.Label>
                <View style={{ marginBottom: "20px" }}>
                  <Form.Control type="text" placeholder="30" onChange={({ target }) => setTsuboPlan(target.value)} value={tsuboPlan} style={{ height: "35px", padding: "0px 10px" }} />
                </View>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "14px" }}>自己資金</Form.Label>
                <View style={{ marginBottom: "20px" }}>
                  <Form.Control type="text" placeholder="0" onChange={({ target }) => setJikoshikin(target.value)} value={jikoshikin} style={{ height: "35px", padding: "0px 10px" }} />
                </View>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "14px" }}>金利</Form.Label>
                <View style={{ marginBottom: "20px" }}>
                  <Form.Control type="text" placeholder="1" onChange={({ target }) => setKinriPlan(target.value)} value={kinriPlan} style={{ height: "35px", padding: "0px 10px" }} />
                </View>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "14px" }}>外壁種類</Form.Label>
                <View style={{ marginBottom: "20px" }}>
                  <Form.Control as="select" placeholder="選択してください" onChange={({ target }) => setGaihekiPlan(target.value)} value={gaihekiPlan} defaultValue="モルタル+ストレート" style={{ height: "35px", padding: "0px 10px" }}>
                    <option>モルタル+ストレート</option>
                    <option>サイディング+ストレート</option>
                  </Form.Control>
                </View>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "14px" }}>住宅ローン</Form.Label>
                <View style={{ marginBottom: "20px" }}>
                  <Form.Control type="text" placeholder="3,500万円" onChange={({ target }) => setLoanMochiie(target.value)} value={loanMochiie} style={{ height: "35px", padding: "0px 10px" }} />
                </View>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "14px" }}>家賃(月額 / 管理費等含む)</Form.Label>
                <View style={{ marginBottom: "20px" }}>
                  <Form.Control type="text" placeholder="8万円" onChange={({ target }) => setYachin(target.value)} value={yachin} style={{ height: "35px", padding: "0px 10px" }} />
                </View>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "14px" }}>駐車場代</Form.Label>
                <View style={{ marginBottom: "20px" }}>
                  <Form.Control type="text" placeholder="2.5万円" onChange={({ target }) => setChusyajo(target.value)} value={chusyajo} style={{ height: "35px", padding: "0px 10px" }} />
                </View>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "14px" }}>建物価格</Form.Label>
                <View style={{ marginBottom: "20px" }}>
                  <Form.Control type="text" placeholder="3,500万円" onChange={({ target }) => setMochiie(target.value)} value={mochiie} style={{ height: "35px", padding: "0px 10px" }} />
                </View>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "14px" }}>土地価格</Form.Label>
                <View style={{ marginBottom: "20px" }}>
                  <Form.Control type="text" placeholder="2,000万円" onChange={({ target }) => setTochiPrice(target.value)} value={tochiPrice} style={{ height: "35px", padding: "0px 10px" }} />
                </View>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ fontSize: "14px" }}>頭金(贈与含む)</Form.Label>
                <View style={{ marginBottom: "20px" }}>
                  <Form.Control type="text" placeholder="500万円" onChange={({ target }) => setAtamakin(target.value)} value={atamakin} style={{ height: "35px", padding: "0px 10px" }} />
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
        <View style={{ padding: "50px", position: "fixed", width: "70%" }}>
          <View>
            <Text style={{ fontSize: "25px", fontWeight: "bold", color: "#fff", alignSelf: "center" }}>
              家づくりは「住んでからかかる費⽤」も重要！{"\n"}
              あなたのライフサイクルコストいくら？
            </Text>
          </View>
          <View>
            {isLoading ? <img style={{ paddingTop: "20px", alignSelf: "center", width: "70%", height: "70%" }} src={screen}></img> :
              <Video
                source={{ uri: videoUrl }}
                rate={1.0}
                volume={1.0}
                resizeMode="cover"
                shouldPlay
                progressUpdateIntervalMillis={5000}
                useNativeControls
                style={{ paddingTop: "20px", alignSelf: "center", width: "100%", height: "70%" }}
                posterStyle={{ paddingTop: "20px", alignSelf: "center", width: "100%", height: "70%" }}>
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