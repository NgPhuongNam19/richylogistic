import { Dimensions, FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import { Divider, Text } from "react-native-paper";
import CustomColors from "../../../constants/color";
import { BarChart } from "react-native-gifted-charts";
import { useEffect, useState } from "react";
import ItemDelivery from "../Views/box-item-deliver";
import { useNavigation } from "@react-navigation/native";
import { todayAnalyticsStrings } from "../../../constants/string";


export default function TodayAnalyticsScreen({ route, navigation }) {
    // const data = [{ value: 1, label: 'M' }, { value: 6, label: 'N' }, { value: 23, label: 'S' }, {
    //     value: 11, label: 'A', topLabelComponent: () => (
    //         < Text style={{ color: 'blue', fontSize: 18, marginBottom: 6 }}> 11</Text >
    //     ),
    // }]
    // const { rawData } = route.params;
    const { barData } = route.params;
    const { deliverieds } = route.params;
    const { notDeliverieds } = route.params;
    const windowWidth = Dimensions.get('window').width;
    navigation = useNavigation();
    // const barData = [];
    // const [deliverieds, setDeliverieds] = useState([]);
    // const [notDeliverieds, setNotDeliverieds] = useState([]);
    // const [barData, setBarData] = useState([]);


    // function getDelivriedFromRawData() {
    //     let drafDeleveriedfArray = Array();
    //     let drafNotDeleveriedfArray = Array();
    //     rawData.forEach(e => {
    //         if (e.IsAllTransfered === true) {
    //             drafDeleveriedfArray.push(e);
    //         } else {
    //             drafNotDeleveriedfArray.push(e);
    //         }
    //     });
    //     setDeliverieds(drafDeleveriedfArray);
    //     setNotDeliverieds(drafNotDeleveriedfArray)
    // }

    useEffect(() => {
        // getRawData();
        // getDelivriedFromRawData();
        // fillBarData();
    }, [])

    const renderTitle = () => {
        return (
            <View style={{ marginVertical: 15 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>{todayAnalyticsStrings.Report_Of_Each_Delivering_Hour}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                    <View style={{ height: 12, width: 12, borderRadius: 6, backgroundColor: 'green', marginRight: 8, }} />
                    <Text style={{ width: 60, height: 16, color: 'white' }}>{todayAnalyticsStrings.Hour_Text}</Text>
                </View>
            </View>
        )
    }
    if (deliverieds.length === 0) {
        return <View>
            <View style={{ alignSelf: 'center', width: '90%', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', marginTop: 10, marginBottom: 15 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, color: 'green' }}>{deliverieds.length}</Text>
                    <Text style={{ fontSize: 18, fontWeight: '300', color: CustomColors.Primary_Blue }}>{todayAnalyticsStrings.SO_Status_Done_Text}</Text>
                </View>
                <View style={{ width: 0.4, height: '80%', backgroundColor: CustomColors.Primary_Blue }}></View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, color: CustomColors.Primary_Red }}>{notDeliverieds.length}</Text>
                    <Text style={{ fontSize: 18, fontWeight: '300', color: CustomColors.Primary_Blue }}>{todayAnalyticsStrings.Total_Hour_Delivering_Text}</Text>
                </View>
            </View>

            <Divider style={{ width: '95%', height: 0.3, backgroundColor: CustomColors.Primary_Blue, alignSelf: 'center' }} />
        </View>
    }
    return <View style={{}} >
        <View style={{ alignSelf: 'center', width: '90%', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', marginTop: 10, marginBottom: 15 }}>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('ListDeliveried', {listDeliveried: deliverieds}) }>
                <Text style={{ fontSize: 30, color: 'green' }}>{deliverieds.length}</Text>
                <Text style={{ fontSize: 18, fontWeight: '300', color: CustomColors.Primary_Blue }}>{todayAnalyticsStrings.SO_Status_Done_Text}</Text>
            </TouchableOpacity>
            
            <View style={{ width: 0.4, height: '80%', backgroundColor: CustomColors.Primary_Blue }}></View>
            
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 30, color: CustomColors.Primary_Red }}>{notDeliverieds.length}</Text>
                <Text style={{ fontSize: 18, fontWeight: '300', color: CustomColors.Primary_Blue }}>{todayAnalyticsStrings.SO_Status_Undone_Text}</Text>
            </View>
        </View>

        <Divider style={{ width: '95%', height: 0.3, backgroundColor: CustomColors.Primary_Blue, alignSelf: 'center', }} />

        <ScrollView style={{ height: '85%', width: '100%', paddingStart: 10, paddingEnd: 10, paddingTop: 15, marginBottom: 20 }}>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: CustomColors.Primary_Blue }}>{todayAnalyticsStrings.Total_Hour_Delivering_Text}: </Text>
                <Text style={{ fontSize: 20, color: CustomColors.Primary_Blue }}>51</Text>
            </View>
            <View style={{ backgroundColor: CustomColors.Primary_Blue, paddingBottom: 10, borderRadius: 10, marginBottom: 20 }}>
                {renderTitle()}
                <BarChart
                    data={barData}
                    barWidth={40}
                    // spacing={50}
                    barBorderTopLeftRadius={15}
                    barBorderTopRightRadius={15}
                    // roundedBottom
                    // hideRules
                    // xAxisThickness={0}
                    frontColor={'green'}
                    noOfSections={12}
                    maxValue={24}
                    isAnimated
                    height={450}
                    width={windowWidth * 0.85}
                    xAxisColor={'white'}
                    xAxisType={'dashed'}
                    yAxisThickness={0}
                    yAxisTextStyle={{ color: 'white' }}
                />
            </View>

            <View style={{ marginBottom: 25 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10, color: CustomColors.Primary_Blue }}>{todayAnalyticsStrings.Fastest_Delivering_Text}: </Text>
                <ItemDelivery deliveryNumber={deliverieds[0].DeliveryNumber}/>
            </View>

        </ScrollView>
    </View>
}