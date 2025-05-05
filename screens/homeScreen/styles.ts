import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../resuables/colors";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // marginTop:30,
    // alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    // padding: 20,
  },
  headerWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: 20,
    marginTop: 50,
    width: "100%",
  },
  searchWrap: {
    width: "80%",
  },
  notificationWrapper: {
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: colors.grey,
    justifyContent: "center",
    alignItems: "center",
    // position: "relative",
  },

  notificationIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  redDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "red",
    position: "absolute",
    top: 2,
    right: 4,
  },
  homeBanner: {
    width: 360,
    height: 165,
    marginTop: 30,
    borderRadius: 20,
    overflow: "hidden", // still needed for rounding background, but we’ll work around this
    paddingHorizontal: 20,
    justifyContent: "center",
  },

  homeBannerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "visible", // allow content inside to overflow
    position: "relative",
  },

  homeRightImage: {
    width: 280,
    height: 200, 
    marginLeft: 70,
    marginTop: -190, 
    marginBottom: -20, 
    resizeMode: "cover", 
  },

  homeLeftWrapper: {
    width: "40%",
  },

  homeHeadText: {
    fontSize: 24,
    fontWeight: "800",
    color: colors.orange,
    marginBottom: 6,
  },

  homeTextOne: {
    fontSize: 22,
    fontWeight: "600",
    color: colors.white,
  },

  homeTextTwo: {
    fontSize: 12,
    fontWeight: "500",
    color: colors.white,
  },

  homeTextThree: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.white,
    marginTop: -6,
  },

  homeTextWrapper: {
    backgroundColor: colors.white,
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginTop: 8,
    alignItems: "center",
    alignSelf: "flex-start",
  },

  homeTextFour: {
    fontSize: 8,
    fontWeight: "800",
    color: colors.darkOrange,
  },
  validText:{
    fontSize: 8,
    fontWeight: "400",
    color: colors.lightDark,
    marginTop: 15,
    textAlign: "center",
  },
  scrollContainer: {
    marginTop: 20,
    // paddingHorizontal: 10,
    maxHeight: 40,
  },
  scrollContent: {
    paddingHorizontal: 10,
    gap: 10,
  },
  categoryItem: {
    borderWidth: 1,
    borderColor: colors.lightDarkTwo,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "white", // optional for better contrast
  },
  categoryText: {
    color: "black",
    fontWeight: "500",
  },
  hotDealsWrapper: {
    marginTop: 30,
    paddingHorizontal: 10,
    // backgroundColor:'red',
    height: 260
  },
  hotDealsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  hotDealsTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
  },
  hotDealsIndicator: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  orangeRect: {
    width: 16,
    height: 6,
    backgroundColor: colors.lightOrange,
    borderRadius: 10,
  },
  greyDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: colors.lightDarkTwo,
  },
  dealsScrollContent: {
    gap: 15,
    paddingRight: 10,
  },
  dealItem: {
    width: 160,
    backgroundColor: colors.grey,
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    maxHeight: 220,
  },
  dealImage: {
    width: 150,
    height: 140,
    marginBottom: 10,
    marginTop:-20
  },
  dealTitle: {
    fontSize: 10,
    fontWeight: "400",
    color: "black",
    // textAlign: "center",
    marginBottom: 5,
    marginTop:-10
  },
  dealPrice: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
    marginBottom: 8,
  },
  shippingWrapper: {
    backgroundColor: "white",
    paddingVertical: 4,
    // paddingHorizontal: 8,
    borderRadius: 12,
    width:100
  },
  shippingText: {
    fontSize: 12,
    color: colors.green,
    fontWeight: "500",
    textAlign: "center",
  },
  recentlyViewedWrapper: {
    marginTop: 30,
    paddingHorizontal: 10,
    marginBottom:120
  },
  recentlyViewedTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
    marginBottom: 15,
  },
  recentScrollContent: {
    gap: 15,
    paddingRight: 10,
  },
  recentItem: {
    width: 165,
    borderRadius: 12,
    padding: 10,
    paddingTop: 18,
    alignItems: "center",
    position: "relative",
  },
  recentNotifWrapper: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "white",
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  recentNotifIcon: {
    width: 14,
    height: 14,
    resizeMode: "contain",
  },
  recentImage: {
    width: 140,
    height: 100,
    marginBottom: 10,
  },
  recentTitle: {
    fontSize: 15,
    fontWeight: "400",
    color: "black",
    textAlign: "center",
    marginBottom: 5,
  },
  recentPrice: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
  },
});
