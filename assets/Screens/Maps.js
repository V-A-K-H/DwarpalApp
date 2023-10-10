import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default class Home extends React.Component {
  render() {
    return (
        <View style={{ alignItems: "center" ,
        backgroundColor:"white",
        height:"100%"
    }}>
        <Image
            source={"https://cdn.dribbble.com/users/1791559/screenshots/4465351/wip.gif"}
            style={{ height: 600, width: 600 }}
        />
        <Text>Work in Progress...</Text>
    </View>
    );
  }
}
