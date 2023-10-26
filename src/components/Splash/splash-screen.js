import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomStrings, { bottomNavigationTabStrings, homeStrings } from "../../constants/string";
import CustomColors from "../../constants/color";
import { StatusBar, Image, View} from "react-native";

function SplashScreen({ navigation }) {
    const getData = async () => {
        try {
            const userDataJsonValue = await AsyncStorage.getItem('UserData');
            const deliveringJsonValue = await AsyncStorage.getItem('Delivering');
            if (userDataJsonValue == null) {
                setTimeout(function () {
                    navigation.replace('Login');
                }, 2000)
            } else if (deliveringJsonValue !== null) {
                const deliveringData = JSON.parse(deliveringJsonValue);
                console.log(deliveringData);
                setTimeout(function () {
                    navigation.navigate('Delivering', {
                        isDeliveringLast: deliveringData.isDeliveringLast
                    });
                    // navigation.navigate('ChooseReason', {isDeliveringLast: false, valueFromQR: 'acb'});
                }, 2000)
            } else {
                const userData = JSON.parse(userDataJsonValue);
                console.log(userData.FullName);
                setTimeout(function () {
                    navigation.replace('HomeTab', {
                        screen: bottomNavigationTabStrings.Navigator_Tab_Home,
                        params: { fullName: userData.FullName, userName: userData.UserName, welcomeText: homeStrings.Welcome_Back_Text }
                    });
                }, 2000)
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getData();
    }, [])

    return <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: CustomColors.Primary_Blue }}>
        <StatusBar barStyle={"dark-content"} />
        <Image source={require('../../assets/LogoRichy.png')}
            style={{ resizeMode: "contain", width: '90%' }}></Image>
    </View>
}


export default SplashScreen;