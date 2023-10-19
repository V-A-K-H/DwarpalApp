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

import {
  FlatList,
  Button,
  StyleSheet,
  Modal,
  Text,
  Image,
  View,
  Linking,
  TouchableHighlight,
} from "react-native";
import { useState } from "react";
import { IconButton } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { ScrollView } from "react-native-gesture-handler";
// import { TouchableHighlight } from "react-native-web";
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
      name: "Pizza Slice",
      img: "https://img.restaurantguru.com/r8ec-Chai-Shai-Castle-meat.jpg",
      contact: 7409177220,
      menu: "https://snack-web-player.s3.us-west-1.amazonaws.com/v2/48/assets/src/react-native-logo.png",
    },
    {
      name: "Variety Sweets and Restaurant",
      img: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
      contact: 9758548275,
      menu: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
    },
    {
      name: "Brownies",
      img: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
      contact: 9837849198,
      menu: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
    },
    {
      name: "Double Burner",
      contact: 9582543696,
      menu: "https://snack-web-player.s3.us-west-1.amazonaws.com/v2/48/assets/src/react-native-logo.png",
    },
    {
      name: "Pizza Bite",
      contact: 7351445553,
      menu: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
    },
    {
      name: "Machan Restaurant",
      contact: 9582543696,
      menu: "https://snack-web-player.s3.us-west-1.amazonaws.com/v2/48/assets/src/react-native-logo.png",
    },
    {
      name: "Food O Clock",
      contact: 9411198129,
      menu: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
    },
    {
      name: "UK-04",
      contact: 9456728880,
      menu: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
    },
    {
      name: "Dajyu's",
      contact: 9205176461,
      menu: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
    }
  ];

  const calling = (contact) => {
    Linking.openURL(`tel:${contact}`);
  };

  return (
    <>
      {/* <View>
  <BingMapsView
        credentialsKey="AgRK3oshIVseQ4Gc61ETyaoRktQzuZqxwlisGgE5PqRfuJQScqSC-kyC8iepNJy3"
        mapLocation={{ lat: 12.9010875, long: 77.6095084, zoom: 15 }}
        style={styles.box}
      />
  </View> */}

      <ScrollView
        style={{
          height: "100%",
          backgroundColor: "#154785",
        }}
      >
        <View
          style={{
            height: 200,
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
                height:300,
                width:"100%"
              }}
              source={{uri:"https://ik.imagekit.io/shortpedia/Voices/wp-content/uploads/2022/08/Bhimtal-lake-1200x900-1.jpg"}}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#eeeeee",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingBottom: 75,
            paddingTop:30,
            paddingHorizontal: 20,
          }}
        >
        <Text
              style={{
                fontFamily: "Bold",
                fontSize: 18,
                color: "black",
                fontWeight: 600,
                margin:15,
                marginTop:2
              }}
            >
              Restaurant Menu
            </Text>
          <FlatList
            data={names}
            renderItem={(element) => {
              const isItemSelected = selectedItem === element.item.name;

              return (
                <>
                  <View
                    style={{
                      backgroundColor: "white",
                      padding: 20,
                      shadow: 30,
                      marginBottom: 10,
                      color: "white",
                      borderRadius: 10,
                      flexDirection: "row",
                      alignItems: "center",
                      // elevation: for android
                    }}
                  >
                    <Text
                      style={{
                        color: "black",
                        fontSize: 17,
                        fontWeight: "400",
                        flex: 1,
                        width: 100,
                      }}
                    >
                      {element.item.name}
                    </Text>

                    <TouchableHighlight onPress={() => setSelectedItem(element.item.name)}>
                    <Image
                      style={{
                        height: 50,
                        width: 50,
                        marginHorizontal: 10,
                      }}
                      source={require(".././Icons/menu.gif")}
                    />
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => calling(element.item.contact)}>
                    <Image
                      style={{
                        height: 50,
                        width: 50,
                        marginHorizontal: 10,
                      }}
                      source={require(".././Icons/telephone.gif")}
                      
                    />
                    </TouchableHighlight>
                  </View>
                  {isItemSelected && (
                    <View style={styles.container}>
                      <Modal
                        animationType="slide"
                        transparent={false}
                        visible={isItemSelected}
                      >
                        <View style={styles.modalContainer}>
                        <View style = {{display: 'flex', flexDirection: 'row', paddingHorizontal: 10, marginBottom: 100, backgroundColor: '#FFF',}}>
                        <FontAwesome5
                            name="less-than"
                            Color="red"
                            size={35}
                            style={styles.close}
                            onPress={closeImage}
                          />
                          <Text style = {{fontSize: 22, display: 'flex', alignItems: 'center', backgroundColor: 'white'}}>
                          {element.item.name}
                          </Text>
                        </View>
                          <Image
                            source={{ uri: element.item.menu }}
                            style={styles.menu}
                          />
                          
                        </View>
                      </Modal>
                    </View>
                  )}
                </>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </View>
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
    height: "80%",
    width: 120,
  },
  menu: {
    height: 450,
    width: '100%',
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,

  },
  name: {
    fontSize: 20,
    color: "black",
    width: "60%",
  },
  button1: {
    marginRight: 25,
  },
  view: {
    display: "flex",
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  view2: {
    display: "flex",
    marginLeft: 10,
    flexDirection: "row",
    width: 380,
  },
  view3: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  menuIcon: {
    color: "blue",
  },
  callIcon: {
    color: "green",
  },
  close: {
    // width: '100%',
    alignSelf: "center",
    color: "grey",
    marginRight: 20,
    

    

  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: '#000',
  },
  modalContainer: {
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: 100,
    // paddingTop: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: -2,
    // },
    // shadowOpacity: 0.8,
    // shadowRadius: 4,
    // elevation: 5,

  },
});

export default ResData;
