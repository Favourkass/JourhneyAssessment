import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../resuables/colors";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  backgroundImage: {
    width: width,
    height: "100%",
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 24,
    color: "#fff", // Adjust based on background image
    fontWeight: "bold",
  },
  topRightWrapper: {
    position: "absolute",
    top: 40,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginHorizontal: 2,
  },
  bar: {
    width: 18,
    height: 4,
    backgroundColor: "#fff",
    marginHorizontal: 2,
    borderRadius:3
  },
  topWrapper:{
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 100,
  },
  leftWrapper:{
    width: "50%",
    justifyContent: "center",
    // alignItems: "flex-start",
    // paddingHorizontal: 20,
  },
  headText:{
    fontSize: 50,
    fontWeight: "600",
    color: `${colors.orange}`,
    marginBottom: 10,
    // width: "60%"
  },
  lighteningImage:{
    width: 162,
    height: 162,
    // marginLeft: "auto",
    marginTop: 10,
    marginLeft:-27
  },
  textOne:{
    fontSize: 32,
    fontWeight: "600",
    color: `${colors.white}`,
    marginBottom: 10,
  },
    textTwo:{
        fontSize: 15,
        fontWeight: "500",
        color: `${colors.white}`,
    },
    textThree:{
        fontSize: 22,
        fontWeight: "400",
        color: `${colors.white}`,
        marginTop:-15
    },
    textWrapper:{
        backgroundColor: `${colors.white}`,
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginTop: 10,
        alignItems: "center",
    },
textFour:{
    fontSize: 15,
    fontWeight: "800",
    color: `${colors.darkOrange}`,
},
imageLogin:{
    width: 331,
    height: 360,
    marginTop: -40,
    marginLeft: "auto",
    marginRight: "auto",
},
textFive:{
    fontSize: 10,
    fontWeight: "400",
    color: `${colors.white}`,
    marginTop: 10,
    textAlign: "center",
    paddingHorizontal: 20,
},
button:{
    backgroundColor: `${colors.white}`,
    borderRadius: 20,
    paddingVertical: 13,
    // paddingHorizontal: 30,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    marginLeft:"auto",
    marginRight:"auto"
},
buttonText:{
    fontSize: 14,
    fontWeight: "600",
    color: `${colors.darkOrange}`,
    textAlign: "center",
},
buttonTextTwo:{
    fontSize: 14,
    fontWeight: "600",
    color: `${colors.white}`,
    textAlign: "center",
    marginTop:20
}
});
