import { Image, Text, TouchableOpacity, View } from "react-native";
import CustomColors from "../../../constants/color";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { Divider } from "react-native-paper";
import ItemMenu from "../Views/item-menu";
import CustomStrings, { accountStrings } from "../../../constants/string";
import GetAllCargoes from "../../Home/Services/get-cargoes-from-api";


function AccountScreen({ navigation }) {
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const num = 17
    navigation = useNavigation();

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('UserData');
            if (jsonValue == null) {
                return null;
            } else {
                const userData = JSON.parse(jsonValue);
                setFullName(userData.FullName);
                setUserName(userData.UserName);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const onPressGetData = async () => {
        let rawData = await GetAllCargoes({ id: userName });
        let barData = Array();
        let deliverieds = Array();
        let notDeliverieds = Array();
        rawData.forEach(e => {
            if (e.IsAllTransfered === true) {
                const objOfBarData = {
                    value: num,
                    label: e.DeliveryNumber,
                    spacing: 40,
                    // labelWidth: 40,
                    labelTextStyle: { color: 'white' },
                    // frontColor: 'yellow',
                    topLabelComponent: () => (
                        <Text style={{ color: 'yellow', marginBottom: 6, fontWeight: 'bold', fontSize: 20 }}>{num}</Text>
                    ),
                };
                barData.push(objOfBarData);
                deliverieds.push(e);
            } else {
                notDeliverieds.push(e);
            }
        });
        navigation.navigate('TodayAnalytics', { rawData, barData: barData, deliverieds: deliverieds, notDeliverieds: notDeliverieds })
    }

    return <SafeAreaView style={{ alignItems: "center", height: '100%' }}>
        <Image source={require('../../../assets/LogoRichy.png')} style={{ resizeMode: 'cover', width: '40%', height: '15%' }} />
        <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 5, marginTop: 10, color: CustomColors.Primary_Blue }}>{fullName}</Text>
        <Text style={{ fontSize: 16, fontWeight: "300", marginBottom: 40, color: CustomColors.Primary_Blue }}>{accountStrings.Histaff_Id_Text}: {userName}</Text>

        <View style={{ width: '90%' }}>
            <View style={{ backgroundColor: CustomColors.Primary_Grey, borderRadius: 10, marginBottom: 40 }}>
                <ItemMenu icon={'google-analytics'} title={accountStrings.Today_Analytics_Text} onPressGetData={onPressGetData} />

                <Divider style={{ alignSelf: 'flex-end', width: '82%', backgroundColor: CustomColors.Primary_Blue, marginBottom: 5, marginTop: 5 }} />

                <ItemMenu icon={'history'} title={'Báo cáo các ngày trước'} navigation={navigation} naviScreenName={'TodayAnalytics'} />
            </View>

            <TouchableOpacity style={{ backgroundColor: CustomColors.Primary_Grey, borderRadius: 10, padding: 10, alignItems: 'center', justifyContent: "center" }}
                onPress={() => removeUserData(navigation)}>
                <Text style={{ fontSize: 22, color: CustomColors.Primary_Red }}>{accountStrings.Log_Out_Text}</Text>
            </TouchableOpacity>
        </View>

    </SafeAreaView>
}

const removeUserData = async (navigation) => {
    try {
        await AsyncStorage.removeItem('UserData');
        await AsyncStorage.removeItem('Delivering');
        navigation.replace('Splash')
    } catch (e) {
        console.log(e);
    }

}

export default AccountScreen;