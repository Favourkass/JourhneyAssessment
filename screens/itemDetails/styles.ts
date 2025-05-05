import { StyleSheet } from "react-native";
import { colors } from "../../resuables/colors";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      backgroundColor: colors.white,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 16,
      marginTop:40
    },
    iconCircle: {
      backgroundColor: colors.grey,
      borderRadius: 50,
      padding: 10,
    },
    imageStyle:{
        width: 24,
        height: 24,
    },
    rightIcons: {
      flexDirection: 'row',
      gap: 10,
    },
    largeImage: {
      width: '100%',
      height: 280,
      marginBottom: 12,
    },
    dotWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 8,
    },
    activeRectangle: {
        width: 20,
        height: 5,
        backgroundColor: colors.lightOrange,
        borderRadius: 2,
        marginHorizontal: 6,
    },
    inactiveDot: {
      width: 6,
      height: 6,
      backgroundColor: 'grey',
      borderRadius: 3,
      marginHorizontal: 6,
    },
    thumbnailRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 16,
      marginTop:20
    },
    thumbnail: {
      width: 70,
      height: 70,
      marginHorizontal: 6,
      borderRadius: 20,
      overflow: 'hidden',
      alignItems: 'center',
        justifyContent: 'center',
    },
    activeBorder: {
      borderWidth: 1.5,
      borderColor: colors.yellowFour,
    },
    thumbnailImage: {
      width:70,
      height: 70,
    },
    itemTitle: {
      fontSize: 24,
      fontWeight: '600',
      marginBottom: 8,
    },
    priceRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    price: {
      color: colors.darkOrange,
      fontSize: 22,
      fontWeight: '600',
    },
    taxes: {
      fontSize: 12,
      color: colors.lightDark,
    },
    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    infoDots: {
      flexDirection: 'row',
    },
    activeInfoDot: {
      width: 30,
      height: 30,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: colors.darkCircle,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
    },
    innerActiveDot: {
        width: 22,
        height: 22,
        borderRadius: 11,
        backgroundColor: colors.darkCircle,
      },      
    inactiveInfoDot: {
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: colors.lightCircle,
      marginRight: 8,
    },
    ratingSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    starIcon: {
      width: 16,
      height: 16,
      marginRight: 4,
    },
    ratingText: {
      fontSize: 18,
      fontWeight: '600',
      marginRight: 4,
    },
    reviewText: {
      fontSize: 12,
      color: colors.blackFOur,
    },
    separator: {
      height: 0.5,
      backgroundColor: colors.lightDarkTwo,
      marginVertical: 20,
    },
    buttonRow: {
      flexDirection: 'column',
    //   justifyContent: 'space-between',
      marginBottom: 32,
    },
    cartButton: {
      flex: 1,
      backgroundColor: colors.black,
      padding: 16,
      borderRadius: 30,
      alignItems: 'center',
      marginBottom:10
    },
    cartButtonText: {
      color: colors.white,
      fontWeight: '600',
    },
    buyButton: {
      flex: 1,
      backgroundColor: colors.darkOrange,
      padding: 16,
      borderRadius:30,
      alignItems: 'center',
    //   marginLeft: 8,
      marginBottom:10
    },
    buyButtonText: {
      color: colors.white,
      fontWeight: '600',
    },
  });