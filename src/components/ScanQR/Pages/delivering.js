import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackHandler, Linking, Platform, Text, TouchableOpacity, View } from "react-native";
import { StyleOfQRScreen } from "../Styles/styles-of-qr-screen";
import CustomStrings, { deliveringStrings } from "../../../constants/string";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Divider } from "react-native-paper";
import CustomColors from "../../../constants/color";
import { StyleOfDeliveringScreen } from "../Styles/styles-of-delivering-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DeliveringDetail from "../VIews/delivering_info";

function DeliveringScreen({ navigation, route }) {
    navigation = useNavigation();
    const [itemDelivering, setItemDelivering] = useState('');
    const { isDeliveringLast } = route.params;
    // const [disable, setDisable] = useState(true);

    const getDelivering = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('Delivering');
            if (jsonValue == null) {

            } else {
                setItemDelivering(JSON.parse(jsonValue));
                console.log(itemDelivering);
                // setDisable(false)
            }
        } catch (e) {
            console.log(e);
        }
    };

    useFocusEffect(
        useCallback(() => {
            getDelivering();
            console.log(isDeliveringLast);
            const onBackPress = () => {
                return true;
            };
            BackHandler.addEventListener('hardwareBackPress', onBackPress);
            return () => { BackHandler.removeEventListener('hardwareBackPress', onBackPress); };
        }, [])
    );

    if (itemDelivering == null || itemDelivering == '') {
        return <SafeAreaView style={{ height: '100%', alignSelf: 'center', justifyContent: 'center' }} edges={['top', 'right', 'left']}>
            <Text>{deliveringStrings.No_SO_Delivering_Text}</Text>
        </SafeAreaView>
    }

    return <SafeAreaView style={Platform.select({
        ios: { height: '100%', paddingBottom: 20 },
        android: { height: '98%', paddingTop: 10 }
    })}>
        <View style={StyleOfDeliveringScreen.blockInforIsBeingDeliveriedStyle}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: '10%', }}>
                <Text style={{ fontSize: 22, fontWeight: "bold", color: CustomColors.Primary_Blue }}>{deliveringStrings.Header_Title_Text}</Text>
                <Text style={{ fontSize: 20, color: CustomColors.Primary_Blue }}>{itemDelivering.item.ErpRecord}</Text>

            </View>

            <Divider style={StyleOfDeliveringScreen.dividerStyle} />

            <DeliveringDetail itemDetail={itemDelivering} />

            <Divider style={StyleOfDeliveringScreen.dividerStyle} />

            <View style={StyleOfDeliveringScreen.boxBottomMenuStyle}>
                <TouchableOpacity onPress={() => {}}>
                    <MaterialCommunityIcons name="map-marker-outline" size={35} color={CustomColors.Primary_Blue} />
                </TouchableOpacity>

                <View style={StyleOfDeliveringScreen.verticalDividerStyle}></View>

                <TouchableOpacity onPress={() => { navigation.navigate('QRScan', { isDeliveringLast: isDeliveringLast }) }}>
                    <MaterialCommunityIcons name="qrcode-scan" size={35} color={CustomColors.Primary_Blue} />
                </TouchableOpacity>

                <View style={StyleOfDeliveringScreen.verticalDividerStyle}></View>

                <TouchableOpacity onPress={() => { navigation.navigate('SaleOrder', { item: itemDelivering.item, isDelivering: true, listItems: [] }); }}>
                    <MaterialCommunityIcons name="information-outline" size={35} color={CustomColors.Primary_Blue} />

                </TouchableOpacity>
            </View>
        </View>

    </SafeAreaView>

}
export default DeliveringScreen;