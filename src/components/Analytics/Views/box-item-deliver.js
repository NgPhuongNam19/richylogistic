import { Text, View } from "react-native";
import CustomColors from "../../../constants/color";
import { todayAnalyticsStrings } from "../../../constants/string";

export default function ItemDelivery({deliveryNumber, marginBottom}) {
    return <View style={{ backgroundColor: 'white', height: 80, width: '99%', marginBottom: marginBottom, flexDirection: 'row', alignSelf: "center", justifyContent: 'space-around', elevation: 5, shadowOffset: { height: 5 }, shadowRadius: 4, shadowOpacity: 0.7, borderRadius: 10, borderWidth: 0.5, borderColor: CustomColors.Primary_Blue }}>
        <View style={{ justifyContent: 'center', paddingStart: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: CustomColors.Primary_Blue }}>{deliveryNumber}</Text>
        </View>

        <View style={{ width: '75%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <View style={{ width: 0.4, height: '20%', backgroundColor: CustomColors.Primary_Blue }}></View>

            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 18, color: CustomColors.Primary_Yellow }}>12:00:00</Text>
                <Text style={{ fontWeight: '300', color: CustomColors.Primary_Blue }}>{todayAnalyticsStrings.Begin_Text}</Text>
            </View>

            <View style={{ width: 0.4, height: '20%', backgroundColor: CustomColors.Primary_Blue }}></View>

            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 18, color: 'green' }}>13:00:00</Text>
                <Text style={{ fontWeight: '300', color: CustomColors.Primary_Blue }}>{todayAnalyticsStrings.End_Text}</Text>
            </View>

            <View style={{ width: 0.4, height: '20%', backgroundColor: CustomColors.Primary_Blue }}></View>

            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 18, color: CustomColors.Primary_Red }}>1</Text>
                <Text style={{ fontWeight: '300', color: CustomColors.Primary_Blue }}>{todayAnalyticsStrings.Hour_Text}</Text>
            </View>
        </View>
    </View>
}