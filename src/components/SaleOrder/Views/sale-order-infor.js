import { FlatList, Linking, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StylesOfSaleOrderScreen } from "../Styles/styles-of-sale-order-screen";
import { Divider } from "react-native-paper";
import CustomStrings, { saleOrderStrings } from "../../../constants/string";
import CustomColors from "../../../constants/color";

function SaleOrderInfor({ phoneNumber, item }) {

    return <View>
        <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons name="home-outline" size={25} color={CustomColors.Primary_Blue} />
            <Text style={StylesOfSaleOrderScreen.textInforSaleOrderStyle}>{item.CardName}</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons name="map-marker-radius-outline" size={25} color={CustomColors.Primary_Blue} />
            <Text style={[StylesOfSaleOrderScreen.textInforSaleOrderStyle, {width: '90%'}]}>{item.Address}</Text>
        </View>

        {phoneNumber == null 
        ? null
        : <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <MaterialCommunityIcons name="cellphone" size={25} color={CustomColors.Primary_Blue} />
        <Text onPress={() => {
            Linking.openURL(`tel:${phoneNumber}`)
        }} style={StylesOfSaleOrderScreen.textInforSaleOrderStyle}>{phoneNumber}</Text>
    </View>}

        <Divider bold={true} style={StylesOfSaleOrderScreen.dividerStyle} />

        <View style={{ flexDirection: 'row', justifyContent: "space-around", marginTop: 5 }}>
            <View style={{ alignItems: 'center' }}>
                <Text style={[StylesOfSaleOrderScreen.textInforSaleOrderStyle, { marginStart: 0, fontWeight: '400', marginBottom: 0 }]}>{saleOrderStrings.Number_Of_Cart_Text}</Text>
                <Text style={[StylesOfSaleOrderScreen.textInforSaleOrderStyle, { marginStart: 0 }]}>{item.CartonNum}</Text>
            </View>

            <View style={{ width: 0.5, height: '80%', backgroundColor: CustomColors.Primary_Blue }}></View>

            <View style={{ alignItems: 'center' }}>
                <Text style={[StylesOfSaleOrderScreen.textInforSaleOrderStyle, { marginStart: 0, fontWeight: '400', marginBottom: 0 }]}>{saleOrderStrings.Mass_Text}</Text>
                <Text style={[StylesOfSaleOrderScreen.textInforSaleOrderStyle, { marginStart: 0 }]}>{item.Weight} {saleOrderStrings.Kilogram_Symbol_Text}</Text>
            </View>
            
            <View style={{ width: 0.5, height: '80%', backgroundColor: CustomColors.Primary_Blue }}></View>

            <View style={{ alignItems: 'center' }}>
                <Text style={[StylesOfSaleOrderScreen.textInforSaleOrderStyle, { marginStart: 0, fontWeight: '400', marginBottom: 0 }]}>{saleOrderStrings.Volume_Text}</Text>
                <Text style={[StylesOfSaleOrderScreen.textInforSaleOrderStyle, { marginStart: 0 }]}>{item.Volume} {saleOrderStrings.Cubic_Meter_Symbol_Text}</Text>
            </View>
        </View>

        <Divider bold={true} style={StylesOfSaleOrderScreen.dividerStyle} />

        <Text style={[StylesOfSaleOrderScreen.textInforSaleOrderStyle, { marginStart: 0, fontWeight: '400'}]}>{saleOrderStrings.Goods_Of_SO_Text + ':'}</Text>
        {/* {show === false ? <View></View> : <View style={{ alignSelf: "center", height: '65%', justifyContent: "center", backgroundColor: 'green', borderWidth: 5 }}><Text>abc</Text></View>} */}
    </View>
}
export default SaleOrderInfor;

