import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Fallback = () => {
	return (
		<View style={{ alignItems: "center" ,
        marginTop:50
        }}>
			<Image
				source={{
					uri:"https://i.graphicmama.com/blog/wp-content/uploads/2016/12/06083212/gravity_drib2.gif"
				}}
				style={{ height: 300, width: 300 }}
			/>
			
		</View>
	);
};

export default Fallback;

const styles = StyleSheet.create({});