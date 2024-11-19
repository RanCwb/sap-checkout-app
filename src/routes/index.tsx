import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../pages/LoginScreen/LoginScreen";
import HomeScreen from "../pages/HomeScreen";

export  type RootStackParamList = {
    LoginScreen: undefined;
    HomeScreen: undefined;
    
}

const stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
    return (
        <stack.Navigator initialRouteName="LoginScreen">
            <stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
            <stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        </stack.Navigator>
    );
}


