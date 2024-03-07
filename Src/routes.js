import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "gray",
            }}
        >
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={32} />
                    ),
                }}
                name="Home"
                component={Home}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={32} />
                    ),
                }}
                name="Profile"
                component={Profile}
            />
        </Tab.Navigator>
    )
}





