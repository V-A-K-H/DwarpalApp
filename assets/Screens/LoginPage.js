import React from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert
} from "react-native";
import AdminLogin from "./AdminLogin";
import API from "../../backendApi";
// import EncryptedStorage from 'react-native-encrypted-storage';
import * as SecureStore from 'expo-secure-store'
function LoginPage() {
  const [email, onChangeEmail] = React.useState("Username or Email");
  const [password, onChangePassword] = React.useState("Password");
  const Login = async () => {
    const auth="user"
    try {
      const result = await fetch(`${API}/SignIn`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email,password}),
      })
      console.log(result)
      const response = await result.json()
      
      if (response.errors) Alert.alert("error",response.errors[0].msg)
      if (response.jwtToken) {
        SecureStore.setItemAsync('sessionUser', response.jwtToken)
        SecureStore.setItemAsync('Auth', auth)
      }
    }
    catch (err) {
      console.log("the following are encountered", err)
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.heading1}>Login</Text>
        <Text style={styles.para1}>Welcome to Dwarpal App</Text>
      </View>

      <View style={styles.view2}>
        <TextInput
          style={styles.email}
          value={email}
          onChangeText={(text) => onChangeEmail(text)}
        />
        <TextInput
          style={styles.email}
          value={password}
          onChangeText={(text) => onChangePassword(text)}
        />

        {/* <Button style={styles.signinBtn} title='Sign in' color='#FC6B68' spacing={4}/> */}

        <TouchableOpacity style={styles.buttonstyle} onPress={Login}>
          <Text style={styles.signintxt}>Sign In</Text>
        </TouchableOpacity>

        <View>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    paddingVertical: "11%",
    paddingHorizontal: "4%",
    backgroundColor: "#EEF1F7",
  },

  view1: {
    flex: 1,
    backgroundColor: "#EEF1F7",
    top: "8%",
  },

  view2: {
    flex: 2,
    bottom: "7%",
  },

  //text styles
  heading1: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  para1: {
    fontSize: 18,
    opacity: 0.7,
    textAlign: "center",
    paddingHorizontal: "20%",
    top: 3,
  },

  email: {
    height: 55,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "white",
    color: "#AFADAD",
  },

  fogPw: {
    textAlign: "right",
    right: 14,
    top: 2,
  },

  buttonstyle: {
    borderRadius: 10,
    height: 55,
    margin: 12,
    backgroundColor: "#FC6B68",
    justifyContent: "center",
    alignItems: "center",
    top: 40,
  },

  signintxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  continue: {
    textAlign: "center",
    top: 80,
  },
});

export default LoginPage;
