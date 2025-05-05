import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import SearchComponent from "../../components/searchComponent";
import { imagesAndIcons } from "../../resuables/imagesAndIcons";
import { mockOptionsFilter, mockHotSalesData, recentlyView } from "./mockData";
import { ROUTES } from "../../constants/routes";

const HomeScreen = ({ navigation }: any) => {
  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View>
        <View style={styles.headerWrap}>
          <View style={styles.searchWrap}>
            <SearchComponent />
          </View>
          <View style={styles.notificationWrapper}>
            <Image
              source={imagesAndIcons.notificationIcon}
              style={styles.notificationIcon}
            />
            <View style={styles.redDot} />
          </View>
        </View>

        <ImageBackground
          source={imagesAndIcons.homeFrame}
          style={styles.homeBanner}
          resizeMode="cover"
        >
          <View style={styles.homeBannerContent}>
            <View style={styles.homeLeftWrapper}>
              <Text style={styles.homeHeadText}>CYBER LINIO</Text>
              <Text style={styles.homeTextOne}>
                40%<Text style={styles.homeTextTwo}> DSCNT</Text>
              </Text>
              <Text style={styles.homeTextThree}>in technology</Text>
              <View style={styles.homeTextWrapper}>
                <Text style={styles.homeTextFour}>FREE SHIPPING</Text>
              </View>
            </View>
          </View>
        </ImageBackground>

        <Image
          source={imagesAndIcons.homePageCardImage}
          style={styles.homeRightImage}
        />

        <Text style={styles.validText}>
          *Valid from 27/03 to 01/04 2022. Min stock: 1 unit
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          style={styles.scrollContainer}
        >
          {mockOptionsFilter.map((item, index) => (
            <View key={index} style={styles.categoryItem}>
              <Text style={styles.categoryText}>{item}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.hotDealsWrapper}>
          <View style={styles.hotDealsHeader}>
            <Text style={styles.hotDealsTitle}>Hot deals</Text>
            <View style={styles.hotDealsIndicator}>
              <View style={styles.orangeRect} />
              <View style={styles.greyDot} />
              <View style={styles.greyDot} />
              <View style={styles.greyDot} />
            </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.dealsScrollContent}
          >
            {mockHotSalesData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.dealItem}
                onPress={() => {
                  navigation.navigate(ROUTES.ITEM_DETAILS);
                }}
              >
                <Image
                  source={item.image}
                  style={styles.dealImage}
                  resizeMode="contain"
                />
                <View style={{ width: "100%" }}>
                  <Text style={styles.dealTitle}>{item.title}</Text>
                  <Text style={styles.dealPrice}>{item.price}</Text>
                  <View style={styles.shippingWrapper}>
                    <Text style={styles.shippingText}>{item.shipping}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.recentlyViewedWrapper}>
          <Text style={styles.recentlyViewedTitle}>Recently Viewed</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.recentScrollContent}
          >
            {recentlyView.map((item) => (
              <View
                key={item.id}
                style={[styles.recentItem, { backgroundColor: item.color }]}
              >
                <View style={styles.recentNotifWrapper}>
                  <Image
                    source={imagesAndIcons.notifYellow}
                    style={styles.recentNotifIcon}
                  />
                </View>
                <Image
                  source={item.image}
                  style={styles.recentImage}
                  resizeMode="contain"
                />
                <Text style={styles.recentTitle}>{item.title}</Text>
                <Text style={styles.recentPrice}>{item.price}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
