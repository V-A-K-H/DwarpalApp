import {React,useState} from "react";
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
  const [value, setValue] = useState(null);
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
            transform: [{ rotate: "180deg" }],
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
              transform: [{ rotate: "-180deg" }],
              color: "#FFF",
              fontSize: 35,
              alignSelf: "center",
              fontFamily: "Montserrat_700Bold",
            }}
          >
            Kritik Srivastava
          </Text>
        </LinearGradient>
      </ImageBackground>
      
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 40,
          marginHorizontal: 20,
          paddingVertical: 20,
          marginTop: 20,
          padding:40,
        }}
      >
        <Dropdown
        style={styles. dropdown}
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
          marginHorizontal: 20,
          paddingVertical: 15,
          marginTop: 20,
          padding:30,
          paddingBottom:50,
          marginBottom:80
        }}
      >
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
      />
       <TextInput
        style={styles.input}
        placeholder="B-Tech"
      />
      <TextInput
        style={styles.input}
        placeholder="CSE"
      />
      <TextInput
        style={styles.input}
        placeholder="3"
      />
      <TextInput
        style={styles.input}
        placeholder="Roll Number"
      />
      <TextInput
        style={styles.input}
        placeholder="Father Name"
      />
      <TextInput
        style={styles.input}
        placeholder="Father Phone Number"
      />
      <TextInput
        style={styles.input}
        placeholder="Alternate Phone Number"
      />
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
    fontSize:16,
    margin: 10,
    borderWidth: 0,
    borderBottomWidth:2,
    padding: 10,
  },
});
