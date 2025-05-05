import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  Dimensions,
  Animated,
} from "react-native";
// import {styles} from "./styles";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { imagesAndIcons } from "../../resuables/imagesAndIcons";
// import { mockDataDetails } from "../ItemDetails/mockData";
import { mockDataDetails } from "../itemDetails/mockData";

const CartScreen = ({ navigation }: any) => {
  const [shippingMethod, setShippingMethod] = useState("Home delivery");

  const CARD_WIDTH = 213;
  const CARD_SPACING = 16;
  const { width } = Dimensions.get("window");
  const scrollX = useRef(new Animated.Value(0)).current;
  const paymentMethods = [0, 1];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <TouchableOpacity
          style={styles.iconBackground}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={imagesAndIcons.arrwLeft} style={styles.iconStyle} />
        </TouchableOpacity>
        <Text style={styles.checkoutText}>Checkout</Text>
      </View>

      {/* Product Summary */}
      <View style={styles.productSummaryWrapper}>
        <Image
          source={imagesAndIcons.headSetFront}
          style={styles.productImage}
        />
        <View style={styles.productInfoWrapper}>
          <Text style={styles.productTitle}>{mockDataDetails.title}</Text>
          <View style={styles.priceTaxWrapper}>
            <Text style={styles.productPrice}>${mockDataDetails.price}</Text>
            <Text
              style={[
                styles.taxText,
                { fontSize: 18, marginLeft: 10, marginRight: 10 },
              ]}
            >
              |
            </Text>
            <Text style={styles.taxText}>{mockDataDetails.taxes}</Text>
          </View>
        </View>
      </View>

      {/* Shipping Method */}
      <Text style={styles.sectionTitle}>Shipping method</Text>
      <View style={styles.shippingToggleWrapper}>
        {["Home delivery", "Pick up in store"].map((method) => (
          <TouchableOpacity
            key={method}
            onPress={() => setShippingMethod(method)}
            style={[
              styles.shippingOption,
              shippingMethod === method && styles.activeShippingOption,
            ]}
          >
            <Text
              style={
                shippingMethod === method
                  ? styles.activeShippingText
                  : styles.inactiveShippingText
              }
            >
              {method}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Payment Method */}
      <Text style={styles.sectionTitle}>Select your payment method</Text>

      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.cardScrollWrapper}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        snapToInterval={CARD_WIDTH + CARD_SPACING}
        decelerationRate="fast"
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
      >
        {paymentMethods.map((_, idx) => {
          const inputRange = [
            (CARD_WIDTH + CARD_SPACING) * (idx - 1),
            (CARD_WIDTH + CARD_SPACING) * idx,
            (CARD_WIDTH + CARD_SPACING) * (idx + 1),
          ];
          // const borderRadius = scrollX.interpolate({
          //   inputRange,
          //   outputRange: [25, 28, 25], // slightly increase when focused
          //   extrapolate: "clamp",
          // });
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1.1, 0.9],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={idx}
              style={{ transform: [{ scale }], marginRight: CARD_SPACING }}
            >
              <LinearGradient
                colors={
                  idx === 0
                    ? ["rgba(226, 123, 193, 1)", "rgba(255, 85, 0, 1)"]
                    : ["rgba(162, 128, 193, 1)", "rgba(77, 10, 142, 1)"]
                }
                style={[styles.cardContainer]}
              >
                <View style={styles.cardHeader}>
                  <Image
                    source={imagesAndIcons.visaIcon}
                    style={styles.cardIcon}
                  />
                  <View style={styles.goodWrapper}>
                    <Image
                      source={imagesAndIcons.good}
                      style={styles.cardCheckIcon}
                    />
                  </View>
                </View>
                <Text style={styles.cardNumber}>**** **** **** 1921</Text>
                <Text style={styles.cardDate}>07/25</Text>
              </LinearGradient>
            </Animated.View>
          );
        })}
      </Animated.ScrollView>

      <Text style={styles.addNewText}>+ Add new</Text>

      {/* Alternative Payments */}
      <View style={styles.alternatePaymentsWrapper}>
        {[
          imagesAndIcons.gPay,
          imagesAndIcons.applePay,
          imagesAndIcons.paypal,
        ].map((icon, index) => (
          <View key={index} style={styles.paymentIconWrapper}>
            <Image source={icon} style={styles.paymentIcon} />
          </View>
        ))}
      </View>

      {/* Totals */}
      <View style={styles.totalWrapper}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Subtotal (2 items)</Text>
          <Text style={styles.totalValue}>$200.00</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Shipping cost</Text>
          <Text style={styles.totalValue}>$10.00</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}>$210.00</Text>
        </View>
      </View>
      <View style={styles.separator} />
      {/* Purchase Button */}
      <TouchableOpacity style={styles.purchaseButton}>
        <Text style={styles.purchaseButtonText}>Finalize Purchase</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CartScreen;
