import { Linking, View } from "react-native";
import { Text } from "react-native-paper";
import CustomStrings, { deliveringStrings } from "../../../constants/string";
import { StyleOfDeliveringScreen } from "../Styles/styles-of-delivering-screen";
import FlatListGoodsOfSO from "../../SaleOrder/Views/flat-list-goods-of-SO";
import CustomColors from "../../../constants/color";


export default function DeliveringDetail({ itemDetail }) {
    return <View style={{ height: '80%', padding: 10, paddingBottom: 0 }}>
        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: CustomColors.Primary_Blue}}>{deliveringStrings.Store_Name_Text}</Text>
            <Text style={StyleOfDeliveringScreen.textSOInfor} ellipsizeMode="tail" numberOfLines={1}>{itemDetail.item.CardName}</Text>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: CustomColors.Primary_Blue}}>{deliveringStrings.Store_Address_Text}</Text>
            <Text style={StyleOfDeliveringScreen.textSOInfor} ellipsizeMode="tail" numberOfLines={1}>{itemDetail.item.Address}</Text>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: CustomColors.Primary_Blue}}>{deliveringStrings.Store_Phone_Number_Text}</Text>
            <Text onPress={() => { Linking.openURL(`tel:${itemDetail.phone}`) }}
                style={StyleOfDeliveringScreen.textSOInfor}>{itemDetail.phone}</Text>
        </View>

        <FlatListGoodsOfSO data={itemDetail.listGoods}/>
        
        <Text style={[StyleOfDeliveringScreen.textTotalStyle, { marginTop: 10 }]}>
            {deliveringStrings.Total_Price_Text}: {ConvertToCurrency(itemDetail.docTotal)}
        </Text>
    </View>
}

function ConvertToCurrency(number) {
    const formatter = new Intl.NumberFormat('vi-VN',{style: 'currency', currency: 'VND'});
    // Number(number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    return formatter.format(number);
}
// 'ErpRecord': item.ErpRecord,
//         'CartonNum': item.CartonNum,
//         'Volume': item.Volume,
//         'Weight': item.Weight,
//         'CardName': item.CardName,
//         'Address': item.,