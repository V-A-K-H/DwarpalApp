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
import API from "../../backendApi";
// import EncryptedStorage from 'react-native-encrypted-storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import AsyncStorage from "@react-native-async-storage/async-storage";
function LoginPage({setAuth}) {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [loaded,setLoaded]=React.useState(false)
  const fetchData = async () => {
    const token = await EncryptedStorage.getItem("sessionUser");
    try {
      const result = await fetch(
        `${API}/StudentInfo/columns/name phonenum rollnum fathername fatherphonenum branch year photolink`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          },
        }
      );
      const response = await result.json();
      await AsyncStorage.setItem("user",JSON.stringify(response[0]))
      // Async storage support storing null as a value so empty string instead as a false value
      await AsyncStorage.setItem("purpose","")
    } catch (err) {
      console.log(err);
      window.alert(err);
    }
  };
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
      const response = await result.json()
      if (response.errors) Alert.alert("error",response.errors[0].msg)
      if (response.jwtToken) {
        await EncryptedStorage.setItem('sessionUser', response.jwtToken)
        await EncryptedStorage.setItem('Auth', auth)
        await fetchData()
        setLoaded(true)
        setAuth(true)
      }
    }
    catch (err) {
      console.log("the following are encountered", err)
      Alert.alert("error",err)
      setAuth(false)
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
    fontSize: 22,
    borderWidth: 0,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "white",
    color: "black",
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
