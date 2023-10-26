import { Text, View } from "react-native";
import { StylesOfCargoDetailScreen } from "../Styles/styles-of-cargo-detail-screen";
import CustomStrings, { detailDeliveryStrings } from "../../../constants/string";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CustomColors from "../../../constants/color";


function InforCargoDetail({ item }) {
    return <View>
        <View style={{ flexDirection: 'row', alignItems: 'top' }}>
            <MaterialCommunityIcons name="home-outline" size={22} color={CustomColors.Primary_Blue} />
            <Text style={[StylesOfCargoDetailScreen.cardNameTextStyle, { width: '90%' }]}>{item.CardName}</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'top' }}>
            <MaterialCommunityIcons name="barcode" size={20} color={CustomColors.Primary_Blue} />
            <Text style={StylesOfCargoDetailScreen.cardAddressTextStyle}>{item.ErpRecord}</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'top' }}>
            <MaterialCommunityIcons name="map-marker-radius-outline" size={20} color={CustomColors.Primary_Blue} />
            <Text style={[StylesOfCargoDetailScreen.cardAddressTextStyle, { width: '90%' }]}>{item.Address}</Text>
        </View>

        <View style={StylesOfCargoDetailScreen.box}>
            <View style={{ alignItems: 'top', flexDirection: "row" }}>
                <MaterialCommunityIcons name="weight-kilogram" size={20} color={CustomColors.Primary_Blue} />
                <Text style={StylesOfCargoDetailScreen.othersTextStyle}>{CustomStrings.Text_Weight_Cargo_Detail}{item.Weight} {CustomStrings.Kiogram}</Text>
            </View>

            {item.IsTransfered === null || item.IsTransfered == false
                ? <View style={StylesOfCargoDetailScreen.boxIsNotDeliveried}>
                    <Text style={StylesOfCargoDetailScreen.deliveryTextStyle}>
                        {detailDeliveryStrings.SO_Status_Undone_Text}
                    </Text>
                </View>
                : <View style={StylesOfCargoDetailScreen.boxIsDeliveried}>
                    <Text style={StylesOfCargoDetailScreen.deliveryTextStyle}>
                        {detailDeliveryStrings.SO_Status_Done_Text}
                    </Text>
                </View>}

        </View>
    </View>
};
export default InforCargoDetail;