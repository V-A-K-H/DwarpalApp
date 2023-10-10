import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-web";
import Camera from "./assets/camera.png";
import Home from "./assets/Screens/Home";
import Info from "./assets/Screens/Info"
import Maps from "./assets/Screens/Maps"
import Todo from "./assets/Screens/Todo";
import LoginPage from "./assets/Screens/LoginPage"
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator
    //     tabBarOptions={{ showLabel: false }}
    //     screenOptions={{
    //       tabBarStyle: {
    //         backgroundColor: "white",
    //         position: "absolute",
    //         bottom: 20,
    //         marginHorizontal: 20,
    //         height: 60,
    //         borderRadius: 10,
    //         shadowColor: "#000",
    //         shadowOpacity: 0.06,
    //         shadowOffset: {
    //           width: 8,
    //           height: 8,
    //         },
    //         paddingHorizontal: 20,
    //       },
    //     }}
    //   >
    //     {
    //       //Tab Screens
    //     }
    //     <Tab.Screen
    //       name={"Home"}
    //       component={HomeScreen}
    //       options={{
    //         headerShown:false,
    //         tabBarIcon: ({ focused }) => (
    //           <View
    //             style={{
    //               position: "absolute",
    //             }}
    //           >
    //             <FontAwesome5
    //               name="home"
    //               size={22}
    //               color={focused ? "black" : "grey"}
    //             ></FontAwesome5>
    //           </View>
    //         ),
    //       }}
    //     ></Tab.Screen>

    //     <Tab.Screen
    //       name={"Maps"}
    //       component={MapsScreen}
    //       options={{
    //         headerShown:false,
    //         tabBarIcon: ({ focused }) => (
    //           <View
    //             style={{
    //               position: "absolute",
    //             }}
    //           >
    //             <FontAwesome5
    //               name="map-marked-alt"
    //               size={22}
    //               color={focused ? "black" : "grey"}
    //             ></FontAwesome5>
    //           </View>
    //         ),
    //       }}
    //     ></Tab.Screen>

    //     <Tab.Screen
    //       name={"camera"}
    //       component={CameraScreen}
    //       options={{
    //         headerShown:false,
    //         tabBarIcon: ({ focused }) => (
              
    //             <View
    //               style={{
    //                 width: 60,
    //                 height: 60,
    //                 backgroundColor:"red",
    //                 borderRadius: "50%",
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //                 marginBottom: 50
    //               }}
    //             >
    //               <Image
    //                 source={Camera}
    //                 style={{
    //                   width: 26,
    //                   height: 26,
    //                   tintColor: "white",
    //                 }}
    //               ></Image>
    //             </View>
    //         ),
    //       }}
    //     ></Tab.Screen>

    //     <Tab.Screen
    //       name={"Info"}
    //       component={InfoScreen}
    //       options={{
    //         headerShown:false,
    //         tabBarIcon: ({ focused }) => (
    //           <View
    //             style={{
    //               position: "absolute",
    //             }}
    //           >
    //             <FontAwesome5
    //               name="id-card-alt"
    //               size={22}
    //               color={focused ? "black" : "grey"}
    //             ></FontAwesome5>
    //           </View>
    //         ),
    //       }}
    //     ></Tab.Screen>

    //     <Tab.Screen
    //       name={"ToDo"}
    //       component={TodoScreen}
    //       options={{
    //         headerShown:false,
    //         tabBarIcon: ({ focused }) => (
    //           <View
    //             style={{
    //               position: "absolute",
    //             }}
    //           >
    //             <FontAwesome5
    //               name="bars"
    //               size={22}
    //               color={focused ? "black" : "grey"}
    //             ></FontAwesome5>
    //           </View>
    //         ),
    //       }}
    //     ></Tab.Screen>
    //   </Tab.Navigator>
    // </NavigationContainer>
    <LoginPage/>
  );
}


function HomeScreen() {
  return (
    <Home/>
  );
}
function TodoScreen() {
  return (
    <Todo/>
  );
}
function CameraScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "WHITE",
      }}
    >
      <Text>Camera screen</Text>
    </View>
  );
}
function MapsScreen() {
  return (
    <Maps/>
  );
}
function InfoScreen() {
  return (
    <Info/>
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
