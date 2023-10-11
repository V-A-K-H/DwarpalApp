
import { FlatList, Button, StyleSheet, Modal, Text, Image, View, Linking } from 'react-native';
import { useState } from 'react';
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
    
    <FlatList
      data={names}
      renderItem={(element) => {
        const isItemSelected = selectedItem === element.item.name;
        
        return (
          <>

            <View style={styles.view}>
              <View style={styles.view1}>
                <Image style={styles.image}
                  source={{
                    uri: `${element.item.img}`
                  }}
                />
              </View>
              <View style={styles.view2}>
                <Text style={styles.name}>{element.item.name.length > 20
                  ? `${element.item.name.substring(0, 20)}...`
                  : element.item.name}
                </Text>
                <View style={styles.view3}>
                  <Button
                    style={styles.button1}
                    onPress={() => setSelectedItem(element.item.name)}
                    title="Menu"
                    color="#800080"
                  />

                  <Button
                    style={styles.button1}
                    onPress={() => calling(element.item.contact)}
                    title="Call Now"
                    color="green"
                  />


                </View>

              </View>
            </View>
            {isItemSelected && (
                <View style={styles.container}>
                  <Modal animationType="slide" transparent={true} visible={isItemSelected}>
                    <View style={styles.modalContainer}>
                      <Image source={{ uri: element.item.menu }} style={styles.image1} />
                      <Button title="Close" color = 'red' style={styles.close} onPress={closeImage} />
                    </View>
                  </Modal>
                </View>
              )}
          </>
        );
      }}
      keyExtractor={(item) => item.name}
    />
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
  image1: {
    height: 350,
    width: 350,
    alignSelf: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  },
  button1: {
    marginLeft: 10,
  },
  view: {
    width: '100%',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    height: 90,
    marginLeft: 2,
    marginRight: 2,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    shadowColor: 'black',
    backgroundColor: '  #FFF',
    alignSelf: 'center'

  },
  view1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5
  },
  view2: {
    display: 'flex',
    marginLeft: 20,
    height: 75
  },
  view3: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  close: {
    width: 100,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }


});

export default ResData;