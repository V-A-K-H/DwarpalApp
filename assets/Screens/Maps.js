// import React from "react";
// import {
//   View,
//   Text,
//   Image,
//   ImageBackground,
//   TouchableOpacity,
// } from "react-native";

// export default class Home extends React.Component {
//   render() {
//     return (
//         <View style={{ alignItems: "center" ,
//         backgroundColor:"white",
//         height:"100%"
//     }}>
//         <Image
//             source={"https://cdn.dribbble.com/users/1791559/screenshots/4465351/wip.gif"}
//             style={{ height: 600, width: 600 }}
//         />
//         <Text>Work in Progress...</Text>
//     </View>
//     );

//   }
// }


import { FlatList, Button, StyleSheet, Modal, Text, Image, View, Linking } from 'react-native';
import { useState } from 'react';
import { IconButton } from 'react-native-paper';
import { FontAwesome5 } from "@expo/vector-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { ScrollView } from 'react-native-gesture-handler';
// import { ReactBingmaps } from 'react-bingmaps';
// import BingMapsView from 'react-native-bing-maps';

// const bingMapsApiKey = 'AgRK3oshIVseQ4Gc61ETyaoRktQzuZqxwlisGgE5PqRfuJQScqSC-kyC8iepNJy3';
const ResData = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const closeImage = () => {
    setSelectedItem(null);
  };
  const names = [
    {
      name: "Chai Shai Castle",
      img: "https://img.restaurantguru.com/r8ec-Chai-Shai-Castle-meat.jpg",
      contact: 9582543696,
      menu: "https://snack-web-player.s3.us-west-1.amazonaws.com/v2/48/assets/src/react-native-logo.png"

    },
    {
      name: "Variety Sweets and Restaurant",
      img: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
      contact: 70,
      menu: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg"

    },
    {
      name: "Brownies",
      img: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
      contact: 70,
      menu: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg"

    },
    {
      name: "Double Burner - Cafe and Restaurant Bhimtal",
      img: "https://img.restaurantguru.com/r8ec-Chai-Shai-Castle-meat.jpg",
      contact: 9582543696,
      menu: "https://snack-web-player.s3.us-west-1.amazonaws.com/v2/48/assets/src/react-native-logo.png"

    },
    {
      name: "Pizza Bite",
      img: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
      contact: 70,
      menu: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg"

    },
    {
      name: "Machan Restaurant Bhimtal - Branch of Nainital",
      img: "https://img.restaurantguru.com/r8ec-Chai-Shai-Castle-meat.jpg",
      contact: 9582543696,
      menu: "https://snack-web-player.s3.us-west-1.amazonaws.com/v2/48/assets/src/react-native-logo.png"

    },
    {
      name: "Variety Sweets and Restaurant",
      img: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
      contact: 70,
      menu: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg"

    },
    {
      name: "Variety Sweets and Restaurant",
      img: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
      contact: 70,
      menu: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg"

    },
    {
      name: "Variety Sweets and Restaurant",
      img: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
      contact: 70,
      menu: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg"

    },
    {
      name: "Variety Sweets and Restaurant",
      img: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
      contact: 70,
      menu: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg"

    },
    {
      name: "Variety Sweets and Restaurant",
      img: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
      contact: 70,
      menu: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg"

    }
  ];



  const calling = (contact) => {

    Linking.openURL(`tel:${contact}`);
  }
  
  return (<>
  {/* <View>
  <BingMapsView
        credentialsKey="AgRK3oshIVseQ4Gc61ETyaoRktQzuZqxwlisGgE5PqRfuJQScqSC-kyC8iepNJy3"
        mapLocation={{ lat: 12.9010875, long: 77.6095084, zoom: 15 }}
        style={styles.box}
      />
  </View> */}
    <View style = {{paddingTop: 20, marginLeft: 10, marginRight: 10, borderRadius: 6, backgroundColor: '#154785'}}>
    <Text style={{ fontSize: 22, marginBottom:15, fontWeight: "700", alignSelf:'center', }}>
            Restraunts you may visit
          </Text>
    </View>
    <ScrollView style={{
            paddingBottom:100,
            paddingLeft: 10,
            paddingTop: 5,
            paddingRight: 10,
            // backgroundColor: "#154785",
            
          }}>
    <FlatList
      data={names}
      renderItem={(element) => {
        const isItemSelected = selectedItem === element.item.name;
        
        return (
          <>

            <View>
            <View style={styles.view}>
              {/* <View style={styles.view1}>
                <Image style={styles.image}
                  source={{
                    uri: `${element.item.img}`
                  }}
                />
              </View> */}
              <View style={styles.view2}>
                <Text style={styles.name}>{element.item.name.length > 20
                  ? `${element.item.name.substring(0, 20)}...`
                  : element.item.name}
                </Text>
                <View style={styles.view3}>
                  <View style={styles.button1}>
                    < FontAwesome5 style = {styles.menuIcon}
                      name ="bars"
                      size={22}
                      color= 'black'
                      onPress={() => setSelectedItem(element.item.name)}
                    ></FontAwesome5>  
                  </View>

                  <View style = {styles.button1} >
                  <FontAwesome5 style = {styles.callIcon}
                    onPress={() => calling(element.item.contact)}
                    name = "phone-alt"
                    size = {22}
                    Color = "black"
                  ></FontAwesome5>
                  </View>
                </View>

              </View>
            </View>
            {isItemSelected && (
                <View style={styles.container}>
                  <Modal animationType="slide" transparent={true} visible={isItemSelected}>
                    <View style={styles.modalContainer}>
                      <Image source={{ uri: element.item.menu }} style={styles.menu} />
                      <FontAwesome5
                       name ="times-circle" Color = 'red' size = {35} style={styles.close} onPress={closeImage} />
                    </View>
                  </Modal>
                </View>
              )}
            </View>
          </>
        );
      }}
      keyExtractor={(item) => item.name}
    />
    </ScrollView>
  </>
  );
};

const styles = StyleSheet.create({
  mapImage: {
    width: 400,
    height: 200,
  },
  image: {
    height: '80%',
    width: 120,
  },
  menu: {
    height: 450,
    width: 350,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    width: 250
  },
  button1: {
    marginRight: 25,
  },
  view: {
    display: 'flex',
    backgroundColor: "rgba(0,0,0,0.1)",
          padding: 15,
          shadow: 20,
          marginBottom: 10,
          color: "white",
          borderRadius: 10,
          marginBottom: 12,
          flexDirection: "row",
          // alignItems: "center",
          // paddingBottom: 30,

  },
  view1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  view2: {
    display: 'flex',
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    width: 350,
  },
  view3: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  menuIcon: {
    color: 'blue'
  },
  callIcon: {
    color: 'green'
  },
  close: {
    // width: '100%',
    alignSelf: 'center',
    color: 'red'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  modalContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  }


});

export default ResData;
