import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";

import AntDesign from "react-native-vector-icons/AntDesign"
import { Dropdown } from "react-native-element-dropdown";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import API from "../../backendApi";
import { View } from "react-native";
import { Camera, useCodeScanner, useCameraPermission, useCameraDevice } from 'react-native-vision-camera'
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { PermissionsAndroid, Platform } from "react-native";
import { Camera as VisionCamera } from "react-native-vision-camera";

const data = [
  { label: "Market", value: "1" },
  { label: "Home", value: "2" },
  { label: "Hospital", value: "3" },
  { label: "Mandir", value: "4" },
  { label: "Exam", value: "5" },
];

export default QrScanner = () => {
  const[value,setValue]=useState(null);
  const isFocused=useIsFocused()
  const device = useCameraDevice('back')
  const { hasPermission, requestPermission } = useCameraPermission()
  useEffect(() => {
    requestPermission()
  }, [])

  const [isScanned, setScanned] = useState(false)
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes) => {
      setScanned(true)
    }
  })
  if (device == null) {
    return (<Text>
      No Camera device found
    </Text>)
  }
  if (isScanned) {
    return (
      <Text style={{ color: "black", marginHorizontal: 20, marginVertical: 20, }}>
        Successfully scanned Qr Code
      </Text>
    )
  }
  return (
    <View style={{height: "100%",
    }}>
      {isFocused
        &&
        <VisionCamera device={device} style={{  height: '50%', width: "100%" }} isActive={true} codeScanner={codeScanner} />
        }
        <View
        style={{
          color: 'black',
          backgroundColor: "white",
          borderRadius: 40,
          paddingVertical: 20,
          padding: 40,
          marginHorizontal:10,
          marginVertical:10
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
          itemTextStyle={{color: "black"}}
          // disable={disable}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={value}
          searchPlaceholder="Search..."
          value={value}
          onChange={(item)=>
            setValue(item)
          }
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color="black"
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
      
        <TouchableOpacity
          style={{
            backgroundColor: "#000",
            borderRadius: 40,
            paddingVertical: 12,
            marginVertical: 10,
            marginHorizontal:10,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 3,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
            Let Me In / Out
          </Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  dropdown: {
    color: "black",
    margin: 0,
    height: 50,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    color: "black",
    fontSize: 16,
  },
  selectedTextStyle: {
    color: "black",
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    color: "black",
    height: 40,
    fontSize: 16,
  },
  input: {
    color: "black",
    textShadowColor: "black",
    height: 50,
    width: "50%",
    fontSize: 16,
    marginVertical: 10,
    borderWidth: 0,
    borderBottomWidth: 2,
    padding: 10,
    textTransform: "uppercase",
  },
  input1: {
    color: "black",
    textShadowColor: "black",
    height: 50,
    width: "50%",
    fontSize: 16,
    marginVertical: 10,
    borderWidth: 0,
    borderBottomWidth: 2, 
    padding: 10,
    fontWeight: "600"

  },
});
