import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image } from "react-native";
import HomeScreen from "../screens/homeScreen";
import CartScreen from "../screens/cartScreen";
import FavouritesScreen from "../screens/favouritesScreen";
import ProfileScreen from "../screens/profileScreen";
import { imagesAndIcons } from "../resuables/imagesAndIcons";
import { colors } from "../resuables/colors";

const Tab = createBottomTabNavigator();

const tabBarOptions = {
    showLabel: false,
    style: {
      backgroundColor: "white",
      borderTopWidth: 0, // no white line
      elevation: 0, // Android shadow
      position: "absolute",
      bottom: 20,
      left: 20,
      right: 20,
      borderRadius: 0,
      height: 90,
      paddingHorizontal: 20,
      paddingBottom: 5,
      // Remove iOS shadow
      shadowColor: "transparent",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
      paddingTop: 15,
    },
  };
  
  const renderTabIcon = (icon: any, label: string, focused: boolean) => {
    const content = (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: focused ? 10 : 0,
          minWidth: focused ? 80 : 24,
        }}
      >
        <Image
          source={icon}
          style={{
            width: 24,
            height: 24,
            tintColor: focused ? colors.lightOrange : "gray",
          }}
          resizeMode="contain"
        />
        {focused && (
          <Text
            style={{
              color: colors.lightOrange,
              marginLeft: 6,
              fontSize: 14,
              fontWeight: "500",
            }}
          >
            {label}
          </Text>
        )}
      </View>
    );
  
    return focused ? (
      <View
        style={{
          backgroundColor: colors.deepOrange,
          borderRadius: 21,
          paddingHorizontal: 12,
          paddingVertical: 10,
          alignSelf: "center", // prevents expanding the full tab area
        }}
      >
        {content}
      </View>
    ) : (
      content
    );
  };
  
  

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: tabBarOptions.style }}>
      <Tab.Screen
        name="HomePage"
        component={HomeScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) =>
            renderTabIcon(imagesAndIcons.homeIcon, "Home", focused),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) =>
            renderTabIcon(imagesAndIcons.cartIcon, "Cart", focused),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) =>
            renderTabIcon(imagesAndIcons.favourites, "Liked", focused),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) =>
            renderTabIcon(imagesAndIcons.ProfileIcon, "Profile", focused),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
