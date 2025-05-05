import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { imagesAndIcons } from "../../resuables/imagesAndIcons";
import { styles } from "./styles";
import { mockDataDetails, mockImageData } from "./mockData";
import { ROUTES } from "../../constants/routes";
import CustomButton from "../../components/buttons";
import { colors } from "../../resuables/colors";

const ItemDetailsScreen = ({navigation}:any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = mockImageData[activeIndex].image;

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconCircle} onPress={()=>{
            navigation.goBack();
        }}>
          <Image source={imagesAndIcons.arrwLeft} style={styles.imageStyle} />
        </TouchableOpacity>
        <View style={styles.rightIcons}>
          <View style={styles.iconCircle}>
            <Image
              source={imagesAndIcons.favourites}
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.iconCircle}>
            <Image
              source={imagesAndIcons.uploadIcon}
              style={styles.imageStyle}
            />
          </View>
        </View>
      </View>

      {/* Main Image */}
      <Image
        source={activeImage}
        style={styles.largeImage}
        resizeMode="contain"
      />

      {/* Dots */}
      <View style={styles.dotWrapper}>
        {mockImageData.map((_, index) => (
          <View
            key={index}
            style={
              index === activeIndex
                ? styles.activeRectangle
                : styles.inactiveDot
            }
          />
        ))}
      </View>

      {/* Thumbnails */}
      <View style={styles.thumbnailRow}>
        {mockImageData.map((img, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setActiveIndex(index)}
            style={[
              styles.thumbnail,
              activeIndex === index && styles.activeBorder,
            ]}
          >
            <Image source={img.image} style={styles.thumbnailImage} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Title and Price */}
      <Text style={styles.itemTitle}>{mockDataDetails.title}</Text>
      <View style={styles.priceRow}>
        <Text style={styles.price}>${mockDataDetails.price}</Text>
        <Text style={[styles.taxes,{fontSize:18, marginLeft:10, marginRight:10}]}>|</Text>
        <Text style={styles.taxes}> {mockDataDetails.taxes}</Text>
      </View>

      {/* Info Row */}
      <View style={styles.infoRow}>
        <View style={styles.infoDots}>
          {mockImageData.map((_, index) =>
            index === activeIndex ? (
              <View key={index} style={styles.activeInfoDot}>
                <View style={styles.innerActiveDot} />
              </View>
            ) : (
              <View key={index} style={styles.inactiveInfoDot} />
            )
          )}
        </View>
        <View style={styles.ratingSection}>
          <Image source={imagesAndIcons.starRating} style={styles.starIcon} />
          <Text style={styles.ratingText}>{mockDataDetails.rating}</Text>
          <Text style={styles.reviewText}>({mockDataDetails.reviews})</Text>
        </View>
      </View>

      {/* Line Separator */}
      <View style={styles.separator} />

      {/* CTA Buttons */}
      <View style={styles.buttonRow}>
      <CustomButton
        title="Add to Cart"
        onPress={() => {
          navigation.navigate(ROUTES.CART);
        }}
        backgroundColor={colors.black}
        textColor={colors.white}
        style={{ marginTop: 5 }}
      />
        <CustomButton
        title="Buy Now"
        onPress={() => {
          navigation.navigate(ROUTES.CART);
        }}
        backgroundColor={colors.darkOrange}
        textColor={colors.white}
        style={{ marginTop: 5 }}
      />
      </View>
    </ScrollView>
  );
};

export default ItemDetailsScreen;
