
import {
  FlatList,
  Button,
  StyleSheet,
  Modal,
  Text,
  Image,
  View,
  Linking,
} from "react-native";
import { useState } from "react";
import { IconButton } from "react-native-paper";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { ScrollView } from 'react-native';
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
      menu: "https://snack-web-player.s3.us-west-1.amazonaws.com/v2/48/assets/src/react-native-logo.png",
    },
    {
      name: "Variety Sweets and Restaurant",
      img: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
      contact: 70,
      menu: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
    },
    {
      name: "Brownies",
      img: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
      contact: 70,
      menu: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
    },
    {
      name: "Double Burner - Cafe and Restaurant Bhimtal",
      img: "https://img.restaurantguru.com/r8ec-Chai-Shai-Castle-meat.jpg",
      contact: 9582543696,
      menu: "https://snack-web-player.s3.us-west-1.amazonaws.com/v2/48/assets/src/react-native-logo.png",
    },
    {
      name: "Pizza Bite",
      img: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
      contact: 70,
      menu: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
    },
    {
      name: "Machan Restaurant Bhimtal - Branch of Nainital",
      img: "https://img.restaurantguru.com/r8ec-Chai-Shai-Castle-meat.jpg",
      contact: 9582543696,
      menu: "https://snack-web-player.s3.us-west-1.amazonaws.com/v2/48/assets/src/react-native-logo.png",
    },
    {
      name: "Variety Sweets and Restaurant",
      img: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
      contact: 70,
      menu: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
    },
    {
      name: "Variety Sweets and Restaurant",
      img: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
      contact: 70,
      menu: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
    },
    {
      name: "Variety Sweets and Restaurant",
      img: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
      contact: 70,
      menu: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
    },
    {
      name: "Variety Sweets and Restaurant",
      img: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
      contact: 70,
      menu: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
    },
    {
      name: "Variety Sweets and Restaurant",
      img: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
      contact: 70,
      menu: "https://img.restaurantguru.com/rc43-Variety-Sweets-and-Restaurant-exterior-2023-01.jpg",
    },
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

      <View
        style={{
          backgroundColor: "#eeeeee"
          /*
          with the height being 75%, #154785 is showing in the bottom hence changing the color to white
           backgroundColor: "#154785",*/
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
            height: "75%",
            backgroundColor: "#eeeeee",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingBottom:50,
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
            renderItem={(element,index) => {
              const isItemSelected = selectedItem === element.item.name;

              return (
                <>
                  <View
                    key={index}
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
                    <Image
                      style={{
                        height: 50,
                        width: 50,
                        marginHorizontal: 10,
                      }}
                      source={require(".././Icons/menu.gif")}
                      onPress={() => setSelectedItem(element.item.name)}
                    />

                    <Image
                      style={{
                        height: 50,
                        width: 50,
                        marginHorizontal: 10,
                      }}
                      source={require(".././Icons/telephone.gif")}
                      onPress={() => calling(element.item.contact)}
                    />
                  </View>
                  {isItemSelected && (
                    <View style={styles.container}>
                      <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isItemSelected}
                      >
                        <View style={styles.modalContainer}>
                          <Image
                            source={{ uri: element.item.menu }}
                            style={styles.menu}
                          />
                          <FontAwesome5
                            name="times-circle"
                            Color="red"
                            size={35}
                            style={styles.close}
                            onPress={closeImage}
                          />
                        </View>
                      </Modal>
                    </View>
                  )}
                </>
              );
            }}
          />
        </View>
      </View>
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
    width: 350,
    alignSelf: "center",
    justifyContent: "center",
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
    color: "red",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  modalContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default ResData;
