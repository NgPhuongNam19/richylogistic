import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../Home/Page/home";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CustomColors from "../../constants/color";
import CustomStrings, { bottomNavigationTabStrings } from "../../constants/string";
import { Platform, StyleSheet, View } from "react-native";
import AccountScreen from "../Account/Page/account";

const Tab = createMaterialBottomTabNavigator();

function HomeTab() {
    return <Tab.Navigator
        initialRouteName={bottomNavigationTabStrings.Navigator_Tab_Home}
        activeColor={CustomColors.Primary_Red}
        inactiveColor={CustomColors.Primary_Blue}
        sceneAnimationEnabled={true}
        sceneAnimationType="shifting"
        shifting={true}
        barStyle={Platform.select({
            ios: style.barStyleIOS,
            android: style.barStyleAndroid
        })}>
        <Tab.Screen
            name={bottomNavigationTabStrings.Navigator_Tab_Home}
            component={HomeScreen}
            options={{
                // tabBarLabel: ({color}) => (<Text style={{ fontSize: 15, alignSelf: 'center' }}> {CustomStrings.Navigator_Tab_Home} </Text>),
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                        name="truck-outline"
                        color={color}
                        size={32} />
                ),
            }} />
        <Tab.Screen
            name={bottomNavigationTabStrings.Navigator_Tab_Account}
            component={AccountScreen}
            options={{
                tabBarIcon: ({ color }) =>
                (<MaterialCommunityIcons
                    name="account-outline"
                    color={color}
                    size={32} />)
            }} />
    </Tab.Navigator>
}
const style = StyleSheet.create({
    barStyleIOS: {
        backgroundColor: 'white',
        overflow: 'hidden',
        height: 65,
        borderTopWidth: 0.17,
        borderColor: 'rgba(150, 150, 150, 1)',
        // borderRadius: 30,
        marginBottom: 25,
    },
    barStyleAndroid: {
        backgroundColor: 'white',
        overflow: 'hidden',
        height: 65,
        borderTopWidth: 0.19,
        borderColor: 'rgba(150, 150, 150, 1)',
        // borderRadius: 30,
        marginBottom: 10,
    }
})
export default HomeTab;