import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Video } from 'expo-av';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mytimeOut: false
    };
  }

  componentDidMount() {
    this.timeoutHandle = setTimeout(()=>{
      const playerOptions = {
        interactive: true,
        size: "hd",
        autoplay: true,
        mute: false,
        minimal_version: true,
        src: this.props.videoSrc
      };
      const script = document.createElement("script");
      script.type = 'text/javascript';
      script.src = "https://player.idomoo.com/latest/main.js";
      script.async = true;
      script.onload = function() {
        idmPlayerCreate(playerOptions, "idm_player");
      };
      var parent = document.getElementsByTagName('head').item(0);
      parent.appendChild(script);
      void(0);
      this.setState({mytimeOut: true});
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }

  render() {
    return (
      <div style={{ width: "90%", height: "auto", padding: "5%" }}>	
        {!this.state.mytimeOut ? <View style={{ padding: "20%", flex: 1, alignItems: "center", justifyContent: "center", zIndex: 20 }}><ActivityIndicator size="large" color="white" /></View> : 
          <div id="idm_player" class="idm-player"></div>
        }
      </div>
    )
  }
}
