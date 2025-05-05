import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

// import styles from "./styles";
import styles from "./styles";
import { imagesAndIcons } from "../../resuables/imagesAndIcons";

const SearchComponent = () => {
  return (
    <View style={styles.searchContainer}>
      <Image
        source={imagesAndIcons.searchIcon} // adjust path to your icon
        style={styles.searchIcon}
      />
      <TextInput
        placeholder="Search..."
        placeholderTextColor="#999"
        style={styles.searchInput}
      />
    </View>
  );
};

export default SearchComponent;