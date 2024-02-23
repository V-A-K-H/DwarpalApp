import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import API from "../../backendApi";
import { View } from "react-native";
import { Camera, useCodeScanner, useCameraPermission, useCameraDevice } from 'react-native-vision-camera'
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { PermissionsAndroid, Platform } from "react-native";
import { Camera as VisionCamera } from "react-native-vision-camera";
export default QrScanner = () => {
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
    <View style={{height: "100%"}}>
      {isFocused
        ?
        <VisionCamera device={device} style={{  height: '50%', width: "auto" }} isActive={true} codeScanner={codeScanner} />
        :
        <Text>I am out of focus</Text>}
    </View>


  )
}