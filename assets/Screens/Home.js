import { React, useState, useEffect } from "react";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import {
  ImageBackground,
  Dimensions,
  TextInput,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import API from "../../backendApi";
import * as SecureStore from 'expo-secure-store'
const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;
const data = [
  { label: 'Market', value: '1' },
  { label: 'Home', value: '2' },
  { label: 'Hospital', value: '3' },
  { label: 'Mandir', value: '4' },
  { label: 'Exam', value: '5' },
];

const Profile = () => {
  const [userData, setUserData] = useState(null)
  const [value, setValue] = useState(null);
  const fetchData = async () => {
    const token = localStorage.getItem('sessionUser')
    console.log(token)
    try {
      const result = await fetch(`${API}/StudentInfo/columns/name rollnum fathername fatherphonenum branch year photolink`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token
        },
      })
      const response = await result.json()
      setUserData(response[0])
    }
    catch (err) {
      console.log(err)
      window.alert("Signed Out")
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  console.log(userData)
  return (
    <ScrollView
      style={{
        backgroundColor: "black",

      }}
    >
      <ImageBackground
        source={"https://raw.githubusercontent.com/InternCore/InternCore-Main-Website/main/img/kritik.JPG"}
        style={{
          height: 0.55 * h,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginTop: 60,
            alignItems: "center",
          }}
        >
        </View>
        <LinearGradient
          colors={["rgba(0,0,0,1)", "transparent"]}
          style={{
            transform: "rotate(180deg)",
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            height: 0.16 * h,
          }}
        >
          <Text
            style={{
              transform: "rotate(180deg)",
              color: "#FFF",
              fontSize: 35,
              alignSelf: "center",
              fontFamily: "Montserrat_700Bold",
            }}
          >
            {userData && userData.name}
          </Text>
        </LinearGradient>
      </ImageBackground>

      <View
        style={{
          backgroundColor: "white",
          borderRadius: 40,
          paddingVertical: 20,
          marginTop: 20,
          padding: 40,
        }}
      >
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Purpose"
          searchPlaceholder="Search..."
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
          renderLeftIcon={() => (
            <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
          )}
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 40,
          paddingVertical: 15,
          marginTop: 20,
          padding: 30,
          paddingBottom: 50,
          marginBottom: 80
        }}
      >
        {
          userData ?Object.keys(userData).map((elem, index) => {
            if (elem !== "_id") {
              return (
                <TextInput
                editable={false}
                  key={index}
                  style={styles.input}
                  placeholder={userData[elem]}
                />
              );
            }
            return null;  // Return null for the elements you don't want to render
          }): <Text> Loading</Text>
          
        }


      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  dropdown: {
    margin: 10,
    height: 50,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  input: {
    height: 50,
    fontSize: 16,
    margin: 10,
    borderWidth: 0,
    borderBottomWidth: 2,
    padding: 10,
    color: 'black'
  },
});
