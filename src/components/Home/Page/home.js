import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomStrings, { homeStrings } from "../../../constants/string";
import { StylesOfHomeScreen } from "../Styles/styles-of-home-screen";
import { useCallback, useEffect, useState } from "react";
import GetAllCargoes from "../Services/get-cargoes-from-api";
import { useNavigation } from "@react-navigation/native";
import CustomColors from "../../../constants/color";
import { Divider } from "react-native-paper";

function HomeScreen({ route, navigation }) {
    const { fullName } = route.params;
    const { userName } = route.params;
    const { welcomeText } = route.params;
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [listNotDeliveried, setlistNotDeliveried] = useState([]);
    const [listDeliveried, setlistDeliveried] = useState([]);
    const [listDelivering, setlistDelivering] = useState([]);
    const [stateBoxFilterUnDone, setStateBoxFilterUnDone] = useState(true);
    const [stateBoxFilterDone, setStateBoxFilterDone] = useState(false);
    const [stateBoxFilterDoing, setStateBoxFilterDoing] = useState(false);
    const [disabled, setDisabled] = useState(false);

    navigation = useNavigation();

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        refreshData();
    }, []);

    const refreshData = async () => {
        await getData();
        setRefreshing(false);
    }

    useEffect(() => {
        // setData(await GetAllCargoes({ id: userName }));
        async function getData(userName) {
            let dataa = await GetAllCargoes({ id: userName });
            let dataaa = Array();
            let dataaaa = Array();
            let dataaaaa = Array();
            dataa.forEach(e => {
                if (e.TransStatus == "DELIVERING") {
                    dataaaaa.push(e);
                } else if (e.IsAllTransfered !== true) {
                    dataaa.push(e);
                } else {
                    dataaaa.push(e);
                }
            });

            if (!ignore) {
                if (dataaaaa.length > 0) {
                    setlistDeliveried(dataaaa);
                    setlistNotDeliveried(dataaa);
                    setlistDelivering(dataaaaa);
                    setData(dataaaaa);
                    setDisabled(true);
                    setStateBoxFilterDoing(true);
                    setStateBoxFilterUnDone(false)
                } else {
                    setData(dataaa);
                    setlistDeliveried(dataaaa);
                    setlistNotDeliveried(dataaa);
                    setlistDelivering(dataaaaa);
                }
            }
            // filterNotDeliveried();
        };

        let ignore = false;
        getData(userName);
        // if (listDelivering.length > 0) {
        //     setDisabled(false);
        //     setData(listDelivering);
        //     setStateBoxFilterDoing(true);
        //     setStateBoxFilterUnDone(false)
        // }

        return () => {
            ignore = true;
        }
        // setData(dataFromApi);
    }, [])

    if (data == null || data.length == 0) {
        return <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }} edges={['right', 'left', 'top']} >
            <View style={StylesOfHomeScreen.boxHeaderStyle}>
                <Text style={StylesOfHomeScreen.welcomeTextStyle}>
                    {welcomeText}
                </Text>
                <Text style={StylesOfHomeScreen.fullNameTextStyle}>
                    {fullName}
                </Text>
            </View>

            <View style={StylesOfHomeScreen.boxTitleAndFilterStyle}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: 'white' }}>
                    {homeStrings.Quantity_Of_Delivery_Text}
                </Text>
                <Text style={{ fontWeight: "700", color: 'white' }}>
                    {data.length + ' ' + homeStrings.Delivery}

                </Text>
            </View>

            <View style={{ marginTop: 10, flexDirection: "row", justifyContent: 'space-between', width: '95%', height: 50, alignSelf: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={StylesOfHomeScreen.boxFilterUnselectedStyle}
                    onPress={() => {
                        if (stateBoxFilterDoing !== true) {
                            setStateBoxFilterDoing(true);
                            setStateBoxFilterDone(stateBoxFilterDoing);
                            setStateBoxFilterUnDone(stateBoxFilterDoing);
                        }
                        setData(listDelivering)
                    }}>
                    <Text style={stateBoxFilterDoing ? { color: CustomColors.Primary_Yellow, fontWeight: 'bold', fontSize: 17 } : { color: 'rgba(150, 150, 150, 1)', fontWeight: 'bold', fontSize: 17 }}>{homeStrings.On_Delivering_Text}</Text>
                </TouchableOpacity>

                <View style={{ width: 0.5, height: '50%', backgroundColor: CustomColors.Primary_Blue }}></View>

                <TouchableOpacity style={StylesOfHomeScreen.boxFilterUnselectedStyle} disabled={disabled}
                    onPress={() => {
                        if (stateBoxFilterUnDone !== true) {
                            setStateBoxFilterUnDone(true);
                            setStateBoxFilterDone(stateBoxFilterUnDone);
                            setStateBoxFilterDoing(stateBoxFilterUnDone);
                        }
                        setData(listNotDeliveried)
                    }}>
                    <Text style={stateBoxFilterUnDone ? { color: CustomColors.Primary_Red, fontWeight: 'bold', fontSize: 17 } : { color: 'rgba(150, 150, 150, 1)', fontWeight: 'bold', fontSize: 17 }}>{homeStrings.Uncomplete_Delivery_Text}</Text>
                </TouchableOpacity>

                <View style={{ width: 0.5, height: '50%', backgroundColor: CustomColors.Primary_Blue }}></View>

                <TouchableOpacity style={StylesOfHomeScreen.boxFilterUnselectedStyle} disabled={disabled}
                    onPress={() => {
                        if (stateBoxFilterDone !== true) {
                            setStateBoxFilterDone(true);
                            setStateBoxFilterUnDone(stateBoxFilterDone);
                            setStateBoxFilterDoing(stateBoxFilterDone);
                        }
                        setData(listDeliveried);
                    }}>
                    <Text style={stateBoxFilterDone ? { color: 'green', fontWeight: 'bold', fontSize: 17 } : { color: 'rgba(150, 150, 150, 1)', fontWeight: 'bold', fontSize: 17 }}>{homeStrings.Completed_Delivery_Text}</Text>
                </TouchableOpacity>
            </View>

            <Divider style={{ width: '95%', height: 0.5, backgroundColor: CustomColors.Primary_Blue, alignSelf: 'center', }} />

            <View style={{ height: '75%', alignSelf: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, color: CustomColors.Primary_Blue }}>{homeStrings.Empty_Delivery_Text}</Text>
            </View>
        </SafeAreaView>
    }

    return <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }} edges={['right', 'left', 'top']}>
        <View style={StylesOfHomeScreen.boxHeaderStyle}>
            <Text style={StylesOfHomeScreen.welcomeTextStyle}>
                {welcomeText}
            </Text>
            <Text style={StylesOfHomeScreen.fullNameTextStyle}>
                {fullName}
            </Text>
        </View>

        <View style={StylesOfHomeScreen.boxTitleAndFilterStyle}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: 'white' }}>
                {homeStrings.Quantity_Of_Delivery_Text}
            </Text>
            <Text style={{ fontWeight: "700", color: 'white' }}>
                {data.length + ' ' + homeStrings.Delivery}
            </Text>
        </View>

        <View style={{ marginTop: 10, flexDirection: "row", justifyContent: 'space-between', width: '95%', height: 50, alignSelf: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={StylesOfHomeScreen.boxFilterUnselectedStyle}
                onPress={() => {
                    if (stateBoxFilterDoing !== true) {
                        setStateBoxFilterDoing(true);
                        setStateBoxFilterDone(stateBoxFilterDoing);
                        setStateBoxFilterUnDone(stateBoxFilterDoing);
                    }
                    setData(listDelivering)
                }}>
                <Text style={stateBoxFilterDoing ? { color: CustomColors.Primary_Yellow, fontWeight: 'bold', fontSize: 17 } : { color: 'rgba(150, 150, 150, 1)', fontWeight: 'bold', fontSize: 17 }}>{homeStrings.On_Delivering_Text}</Text>
            </TouchableOpacity>

            <View style={{ width: 0.5, height: '50%', backgroundColor: CustomColors.Primary_Blue }}></View>

            <TouchableOpacity style={StylesOfHomeScreen.boxFilterUnselectedStyle} disabled={disabled}
                onPress={() => {
                    if (stateBoxFilterUnDone !== true) {
                        setStateBoxFilterUnDone(true);
                        setStateBoxFilterDone(stateBoxFilterUnDone);
                        setStateBoxFilterDoing(stateBoxFilterUnDone);
                    }
                    setData(listNotDeliveried)
                }}>
                <Text style={stateBoxFilterUnDone ? { color: CustomColors.Primary_Red, fontWeight: 'bold', fontSize: 17 } : { color: 'rgba(150, 150, 150, 1)', fontWeight: 'bold', fontSize: 17 }}>{homeStrings.Uncomplete_Delivery_Text}</Text>
            </TouchableOpacity>

            <View style={{ width: 0.5, height: '50%', backgroundColor: CustomColors.Primary_Blue }}></View>

            <TouchableOpacity style={StylesOfHomeScreen.boxFilterUnselectedStyle} disabled={disabled}
                onPress={() => {
                    if (stateBoxFilterDone !== true) {
                        setStateBoxFilterDone(true);
                        setStateBoxFilterUnDone(stateBoxFilterDone);
                        setStateBoxFilterDoing(stateBoxFilterDone);
                    }
                    setData(listDeliveried);
                }}>
                <Text style={stateBoxFilterDone ? { color: 'green', fontWeight: 'bold', fontSize: 17 } : { color: 'rgba(150, 150, 150, 1)', fontWeight: 'bold', fontSize: 17 }}>{homeStrings.Completed_Delivery_Text}</Text>
            </TouchableOpacity>
        </View>

        <Divider style={{ width: '95%', height: 0.5, backgroundColor: CustomColors.Primary_Blue, alignSelf: 'center', }} />

        <FlatList style={{ height: '75%', paddingTop: 15 }}
            data={data}
            // onRefresh={onRefresh}
            // refreshing={refreshing}
            renderItem={({ item }) =>
                <TouchableOpacity
                    style={StylesOfHomeScreen.boxItemListCargo}
                    onPress={() => navigation.navigate('CargoDetail', { deliveryNumber: item.DeliveryNumber, saleOrders: item.Details })
                    }>
                    <View style={StylesOfHomeScreen.boxCargoInformationStyle}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ color: CustomColors.Primary_Blue }}>{homeStrings.Id_Delivery_Text + ' '}</Text>
                            <Text style={StylesOfHomeScreen.textInForCargoStyle}>{item.DeliveryNumber}</Text>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ color: CustomColors.Primary_Blue }}>{homeStrings.Vehicle_Number_Text + ' '}</Text>
                            <Text style={StylesOfHomeScreen.textInForCargoStyle}>{item.VehicleNumber}</Text>
                        </View>
                    </View>
                    {item.TransStatus === "DELIVERING"
                        ? <View style={StylesOfHomeScreen.boxIsTransferingStyle}>
                            <Text style={StylesOfHomeScreen.transferStatusTextStyle}>{homeStrings.On_Delivering_Text}</Text>
                        </View>
                        : item.IsAllTransfered == null || item.IsAllTransfered == false
                            ? <View style={StylesOfHomeScreen.boxIsNotTransferedStyle}>
                                <Text style={StylesOfHomeScreen.transferStatusTextStyle}>{homeStrings.Uncomplete_Delivery_Text}</Text>
                            </View>
                            : <View style={StylesOfHomeScreen.boxIsTransferedStyle}>
                                <Text style={StylesOfHomeScreen.transferStatusTextStyle}>{homeStrings.Completed_Delivery_Text}</Text>
                            </View>
                    }
                </TouchableOpacity>
            } />
    </SafeAreaView>
}

export default HomeScreen;