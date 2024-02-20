import { StatusBar } from "expo-status-bar";
import React, { useEffect,useState } from "react";
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useCameraPermission,useCameraDevice,useCodeScanner } from "react-native-vision-camera";
import { Camera as VisionCamera } from "react-native-vision-camera";
import Camera from "./assets/camera.png";
import Home from "./assets/Screens/Home";
import Info from "./assets/Screens/Info"
import Maps from "./assets/Screens/Maps"
import Todo from "./assets/Screens/Todo";
import LoginPage from "./assets/Screens/LoginPage"
import EncryptedStorage from 'react-native-encrypted-storage';
import QRScanner from "./assets/Screens/QRScanner";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Tab = createBottomTabNavigator();
export default function App() {
  console.log("code running")
  const [loading, setLoading] = React.useState(true);
  const [auth, setAuth] = React.useState(false)

  // async function to fetch the user unique token 
  const getToken = async () => {
    const result = await EncryptedStorage.getItem('sessionUser')
    setAuth(result ? true : false)
    setLoading(false)
  }

  useEffect(() => {
    getToken()
  }, [])

  if (loading) {
    // Loading state: render a loading indicator or a blank screen
    return (
      <View style={{
        alignItems: "center",
        marginTop: 60,
        backgroundColor: '#eeeeee'
      }}>
        <Image
          source={{ uri: "https  ://cdn.dribbble.com/users/711094/screenshots/3288010/sean_tiffonnet_loader_360learning.gif" }}
          style={{ height: 600, width: 600 }}
        />
      </View>
    );
  }
  console.log(auth)
  if (!auth) {
    return (
      <LoginPage setAuth={setAuth} />
    )

  }
  function CameraScreen() {
    console.log("Rendering first time the camera screen")
    const { hasPermission, requestPermission } = useCameraPermission()
    const [isScanned, setScanned] = useState(null)
    const isActive = true
    const device = useCameraDevice('back')
    const codeScanner = useCodeScanner({
      codeTypes: ['qr', 'ean-13'],
      onCodeScanned: (codes) => {
        setScanned(codes.length)
        console.log(`Scanned ${codes} codes!`)
      }
    })
    if (isScanned) {
      return (
        <Text style={{ color: "red" }}>
          {isScanned}
        </Text>
      )
    }
    console.log("Rendering")
  
    return (
        <VisionCamera device={device} style={{ marginTop: 50, height: 50, width: 50 }} isActive={isActive} codeScanner={codeScanner} />
        )
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        // tabBarOptions={{ showLabel: false }}

        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {

            backgroundColor: "white",
            position: "absolute",
            bottom: 20,
            marginHorizontal: 20,
            height: 60,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 8,
              height: 8,
            },
            paddingHorizontal: 20,
          },
        }}
      >
        {
          //Tab Screens
        }
        <Tab.Screen
          name={"Home"}
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                }}
              >
                <FontAwesome5
                  name="home"
                  size={22}
                  color={focused ? "black" : "grey"}
                ></FontAwesome5>
              </View>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={"Maps"}
          component={MapsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                }}
              >
                <FontAwesome5
                  name="map-marked-alt"
                  size={22}
                  color={focused ? "black" : "grey"}
                ></FontAwesome5>
              </View>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen

          name={"camera"}
          component={CameraScreen}
          options={{

            headerShown: false,
            tabBarIcon: ({ focused }) => (

              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: "#154785",
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 50
                }}
              >
                <Image
                  source={require("./assets/camera.png")}
                  style={{
                    width: 26,
                    height: 26,
                    tintColor: "white",
                  }}
                ></Image>
              </View>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={"Info"}
          component={InfoScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                }}
              >
                <FontAwesome5
                  name="id-card-alt"
                  size={22}
                  color={focused ? "black" : "grey"}
                ></FontAwesome5>
              </View>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={"ToDo"}
          component={TodoScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                }}
              >
                <FontAwesome5
                  name="bars"
                  size={22}
                  color={focused ? "black" : "grey"}
                ></FontAwesome5>
              </View>
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    // <LoginPage/>
  );
}


function HomeScreen() {
  console.log("Screen Home")
  return (
    <Home />
  );
}
function TodoScreen() {
  console.log("Screen Todo")
  return (
    <Todo />
  );
}

function MapsScreen() {
  console.log("Screen Maps")
  return (
    <Maps />
  );
}
function InfoScreen() {
  return (
    <Info />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
