import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView, 
  TextInput
} from "react-native";

import { Avatar, Button, Card } from "react-native-paper";

export default class Home extends React.Component {
  state = {
    popularSelected: true,
  };
  onTabPressed = () => {
    this.setState({ popularSelected: !this.state.popularSelected });
  };
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          height: "100%",
          backgroundColor: "#154785",
        }}
      >
        <View
          style={{
            height: 150,
            width: "100%",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                height:200,
                width:"100%",
                alignItems: "flex-end",
                fontFamily: "Bold",
                fontSize: 18,
                color: "#FFF",
                fontWeight: "800",
              }}
              source={{uri:"https://www.birlainstitute.co.in/Pictures/img-building.webp"}}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#FFF",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingBottom: 20,
            paddingHorizontal: 35,
            padding: 30,
          }}
        >
          <Text style={{ fontSize: 18, margin: 15, fontWeight: "700" }}>
            Hostel Wardens
          </Text>
          <Card
            style={{
              backgroundColor: "#FFF",
              padding: 10,
              shadow: 20,
              marginBottom: 10,
            }}
          >
            <Card.Content
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>
                  Sandesh Tripathi
                </Text>
                {"\n"}
                +91 9415364502
                {"\n"}
                +91 7982640940
              </Text>
              <Card.Cover
                source={require(".././Faculty/Sandesh.jpg")}
                style={{ width: 120, height: 120 }}
              />
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: "#FFF",
              padding: 10,
              shadow: 20,
              marginBottom: 10,
            }}
          >
            <Card.Content
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>
                  Abhay Sharma
                </Text>
                {"\n"}
                +91 9411199555
              </Text>
              <Card.Cover
                source={require(".././Faculty/Abhay.jpg")}
                style={{ width: 120, height: 120 }}
              />
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: "#FFF",
              padding: 10,
              shadow: 20,
              marginBottom: 10,
            }}
          >
            <Card.Content
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>
                  Shilpi Bisht
                </Text>
                {"\n"}
                +91 9458173450
              </Text>
              <Card.Cover
                source={require(".././Faculty/Shilpi.jpg")}
                style={{ width: 120, height: 120 }}
              />
            </Card.Content>
          </Card>
          <Card
            style={{
              backgroundColor: "#FFF",
              padding: 10,
              shadow: 20,
              marginBottom: 10,
            }}
          >
            <Card.Content
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>
                  Neeraj Bisht
                </Text>
                {"\n"}
                +91 8077851566
                {"\n"}
                +91 9415171251
              </Text>
              <Card.Cover
                source={require(".././Faculty/Neeraj.jpg")}
                style={{ width: 120, height: 120 }}
              />
            </Card.Content>
          </Card>
          <Text style={{ fontSize: 18, margin: 14, fontWeight: "700" }}>
            Developers
          </Text>
          
          <Card
            style={{
              backgroundColor: "#FFF",
              padding: 10,
              shadow: 20,
              marginBottom: 10,
            }}
          >
            <Card.Content
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Card.Cover
                source={require(".././Developers/raj.jpg")}
                style={{ width: 55, height: 55 }}
              />
              <Card.Cover
                source={require(".././Developers/Roy.jpg")}
                style={{ width: 55, height: 55 }}
              />
              <Card.Cover
                source={require(".././Developers/kittu.jpg")}
                style={{ width: 55, height: 55 }}
              />
              <Card.Cover
                source={require(".././Developers/bhatt.jpg")}
                style={{ width: 55, height: 55 }}
              />
            </Card.Content>
          </Card>
          
          <Card
            style={{
              backgroundColor: "#FFF",
              padding: 18,
              shadow: 20,
              marginBottom: 10,
            }}
          >
            <Card.Content
              style={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
            <Text style={{ fontSize: 18, margin: 4, fontWeight: "700" }}>
            About Dwarpal
          </Text>
              <Text style={{ fontSize: 15, margin: 4, fontWeight: "500" ,textAlign: 'center'}}>
            The security system uses QR code scanning to track thge entry and exit of students in 
            college, maintaing a record of their in and out history for monitoring a record of their
             in and out history for monitoring and security purpose.
          </Text>
            </Card.Content>
          </Card>
          
          <Card
            style={{
              padding: 10,
              marginBottom: 25,
            }}
          >
            
          </Card>
        </View>
        
      </ScrollView>
    );
  }
}
