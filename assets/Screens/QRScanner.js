import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import API from "../../backendApi";
import { View } from "react-native";
import { Camera, useCodeScanner, useCameraPermission, useCameraDevice } from 'react-native-vision-camera'
import { useFocusEffect } from "@react-navigation/native";
import { PermissionsAndroid, Platform } from "react-native";
export default QrScanner=()=> {
  
  const { hasPermission, requestPermission } = useCameraPermission()
  const [isScanned,setScanned]=useState(null)
  const isActive=true
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
      <Text style={{color:"red"}}>
        {isScanned}
      </Text>
    )
  } 
  return (
  <View>

  {hasPermission &&<Camera />}
  
  </View>)
}