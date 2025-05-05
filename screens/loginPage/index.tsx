import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { imagesAndIcons } from "../../resuables/imagesAndIcons";
import { ROUTES } from "../../constants/routes";

const LoginPage = ({ navigation }:any) => {
//   const navigation = useNavigation();

  return (
    <ImageBackground
      source={imagesAndIcons.backgroundLogin}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.topRightWrapper}>
        <View style={styles.dot} />
        <View style={styles.bar} />
        <View style={styles.dot} />
      </View>
      <View style={styles.topWrapper}>
        <View style={styles.leftWrapper}>
          <Text style={styles.headText}>CYBER LINIO</Text>
          <Text style={styles.textOne}>
            40%
            <Text style={styles.textTwo}>DSCNT</Text>
          </Text>
          <Text style={styles.textThree}>in technology</Text>
          <View style={styles.textWrapper}>
            <Text style={styles.textFour}>FREE SHIPPING</Text>
          </View>
        </View>
        <Image
          source={imagesAndIcons.lightening}
          style={styles.lighteningImage}
        />
      </View>
      <View>
        <Image
          source={imagesAndIcons.loginPageImage}
          style={styles.imageLogin}
        />
      </View>
      <View>
        <Text style={styles.textFive}>
          *Valid from 27/03 to 01/04 2022. Min stock: 1 unit
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(ROUTES.HOME)}
      >
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // style={styles.buttonTwo}
        onPress={() => navigation.navigate(ROUTES.HOME)}>
        <Text style={styles.buttonTextTwo}>SKIP</Text>
        </TouchableOpacity>
    </ImageBackground>
  );
};

export default LoginPage;
