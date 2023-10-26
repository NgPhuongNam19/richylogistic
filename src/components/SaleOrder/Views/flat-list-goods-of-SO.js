import { FlatList, Text, View } from "react-native";
import { StylesOfSaleOrderScreen } from "../Styles/styles-of-sale-order-screen";
import CustomStrings, { saleOrderStrings } from "../../../constants/string";
import GetRoundNum from "../../../extensions/func-get-round-num";
import CustomColors from "../../../constants/color";

export default function FlatListGoodsOfSO({data}) {
    return <FlatList showsVerticalScrollIndicator={false} data={data} renderItem={({ item }) =>
    <View style={StylesOfSaleOrderScreen.boxSOInforStyle}>

        <View style={StylesOfSaleOrderScreen.boxTextGoodsInforStyle}>
            <View style={{ width: '22%', marginEnd: 4 }}>
                <Text style={{color: CustomColors.Primary_Blue}}>{saleOrderStrings.Goods_Name_Text}: </Text>
            </View>
            <Text style={[StylesOfSaleOrderScreen.textInSOInforStyle, { width: '76%' }]}>{item.dscription}</Text>
        </View>

        <View style={StylesOfSaleOrderScreen.boxTextGoodsInforStyle}>
            <View style={{ width: '22%', marginEnd: 4 }}>
                <Text style={{color: CustomColors.Primary_Blue}}>{saleOrderStrings.Goods_Quantity_Text}: </Text>
            </View>
            <Text style={StylesOfSaleOrderScreen.textInSOInforStyle}>{item.quantity} </Text>
            <Text style={StylesOfSaleOrderScreen.textInSOInforStyle}>( {item.uomCode} )</Text>
        </View>

        <View style={StylesOfSaleOrderScreen.boxTextGoodsInforStyle}>
            <View style={{ width: '22%', marginEnd: 4 }}>
                <Text style={{color: CustomColors.Primary_Blue}}>{saleOrderStrings.Volume_Text}: </Text>
            </View>
            <Text style={StylesOfSaleOrderScreen.textInSOInforStyle}>{GetRoundNum(item.volume)} {saleOrderStrings.Cubic_Meter_Symbol_Text}</Text>
        </View>

        <View style={StylesOfSaleOrderScreen.boxTextGoodsInforStyle}>
            <View style={{ width: '22%', marginEnd: 4 }}>
                <Text style={{color: CustomColors.Primary_Blue}}>{saleOrderStrings.Mass_Text}: </Text>
            </View>
            <Text style={StylesOfSaleOrderScreen.textInSOInforStyle}>{GetRoundNum(item.weight1)} {saleOrderStrings.Kilogram_Symbol_Text}</Text>
        </View>

    </View>
} />
}