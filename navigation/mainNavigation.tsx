import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../screens/loginPage";
import { ROUTES } from "../constants/routes";
import BottomTabs from "./bottomTabNavigation";
import ItemDetailsScreen from "../screens/itemDetails";
import CartScreen from "../screens/cartScreen";



const Stack = createNativeStackNavigator();


const MainNavigation = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            {/* Add your screens here */}
            <Stack.Screen name={ROUTES.LOGIN} component={LoginPage}  options={{ headerShown: false }}/>
            <Stack.Screen name={ROUTES.HOME} component={BottomTabs} options={{ headerShown: false }} />
            <Stack.Screen name={ROUTES.ITEM_DETAILS} component={ItemDetailsScreen} options={{ headerShown: false }} />
            <Stack.Screen name={ROUTES.CART} component={CartScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
        </NavigationContainer>
    );
    }
export default MainNavigation;