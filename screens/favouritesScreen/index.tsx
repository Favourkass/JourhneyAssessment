import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
// import { styles } from "./styles";
import { imagesAndIcons } from "../../resuables/imagesAndIcons";



const FavouritesScreen = ({ navigation }:any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourites Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <Text style={styles.button}>Go to Details</Text>
      </TouchableOpacity>
      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};
export default FavouritesScreen;