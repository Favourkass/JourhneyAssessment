import { StyleSheet } from "react-native";
import { colors } from "../../resuables/colors";


const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.grey,
        borderRadius: 40,
        paddingHorizontal: 12,
        paddingVertical: 4,
        // marginHorizontal: 10,
        // marginBottom: 20,
      },
      
      searchIcon: {
        width: 20,
        height: 20,
        tintColor: "#999",
        marginRight: 10,
      },
      
      searchInput: {
        flex: 1,
        fontSize: 16,
        color: "#000",
      },
      
});
export default styles;