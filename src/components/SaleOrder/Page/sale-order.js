import { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { saleOrderStrings } from "../../../constants/string";
import { SafeAreaView } from "react-native-safe-area-context";
import { StylesOfSaleOrderScreen } from "../Styles/styles-of-sale-order-screen";
import { Divider } from "react-native-paper";
import SaleOrderInfor from "../Views/sale-order-infor";
import FlatListGoodsOfSO from "../Views/flat-list-goods-of-SO";
import ConvertToCurrency from "../../../extensions/func-convert-num-to-currency";
import _checkDataExitsInStorage from "../../../utils/Storage/func-check-data-exits-in-storage";
import _saveDeliveringToStorage from "../../../utils/Storage/func-save-delivering-to-storage";
import _openGgMaps from "../../../utils/Location/func-open-GoogleMaps";
import _getLocation from "../../../utils/Location/func-get-location";
import _requestLocationPermisson from "../../../utils/Location/func-request-location-permisson";
import postTimeStart from "../Services/post-time-start";
import { useNavigation } from "@react-navigation/native";
const { default: axios } = require("axios");


function SaleOrderScreen({ route, navigation }) {
    const { item } = route.params;
    const { deliveringNumber } = route.params;
    const { isDelivering } = route.params;
    const { listItems } = route.params;
    const [isDeliveringLast, setIsDeliveringLast] = useState(false);
    const [isNotDelivering, setIsNotDelivering] = useState(false);
    const [rawwData, setRawData] = useState("");

    navigation = useNavigation();

    async function getDetailInforOfSO({ sapCode, dataType, docEntry }) {
        const urlSAP = 'http://hrm.richy.com.vn:5757/api/RichyPortal/SAPData/Gets?' + 'SapCode=' + sapCode + '&DataType=' + dataType + '&DocEntry=' + docEntry;
        const urlDMS = 'http://ttpp.richy.com.vn:9797/api/DMSLog/GetDataDMS?DocEntry=' + docEntry;
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: sapCode === 'DMS' ? urlDMS : urlSAP,
            headers: {
                'Authorization': 'Basic UlBBZG1pbjpINUFMWGFmd3g0OGttTVdUclBCOHZrZWg='
            }
        };

        await axios.request(config)
            .then((response) => {
                const result = JSON.parse(JSON.stringify(response.data));
                if (result.isOK == true) {
                    console.log(1);
                    setRawData(result.data[0]);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        navigation.setOptions({ title: saleOrderStrings.Header_Title_Text + ' ' + item.ErpRecord });

        getDetailInforOfSO({ sapCode: item.ErpData, dataType: item.ErpRecordType, docEntry: item.ErpRecord });

        if (listItems !== null) {
            let count = 0;
            listItems.forEach(e => {
                if (e.IsTransfered === false || e.IsTransfered === null) {
                    count++
                }
            });
            console.log('count: ' + count);
            if (count == listItems.length) {
                setIsNotDelivering(true);
            }
            if (count == 1) {
                setIsDeliveringLast(true);
            }
        };
        console.log(isDeliveringLast);
    }, [])

    return <SafeAreaView style={{ backgroundColor: 'white', padding: 10, height: '100%' }} edges={['bottom']}>

        <SaleOrderInfor phoneNumber={rawwData.phone} item={item} />

        <FlatListGoodsOfSO data={rawwData.item} />

        <View style={StylesOfSaleOrderScreen.boxButtonStartStyle}>
            <Text style={[StylesOfSaleOrderScreen.textTotalStyle, { marginBottom: 5 }]}>
                {saleOrderStrings.Total_Price_Text}: {ConvertToCurrency(rawwData.docTotal)}
            </Text>

            <Divider style={StylesOfSaleOrderScreen.dividerStyle} />

            {isDelivering == true
                ? <View style={StylesOfSaleOrderScreen.boxDeliveringStyle}>
                    <Text style={StylesOfSaleOrderScreen.textButtonStartStyle}>{saleOrderStrings.On_Delivering_Text}</Text>
                </View>
                : item.IsTransfered === true
                    ? <View style={StylesOfSaleOrderScreen.boxDoneStyle}>
                        <Text style={StylesOfSaleOrderScreen.textButtonStartStyle}>{saleOrderStrings.SO_Status_Done_Text}</Text>
                    </View>
                    : <View style={{ flexDirection: 'row', height: '60%' }}>
                        <TouchableOpacity style={StylesOfSaleOrderScreen.buttonStartStyle}
                            onPress={async () => {
                                let checkDataExitsInStorage = await _checkDataExitsInStorage('Delivering');

                                if (checkDataExitsInStorage) {
                                    Alert.alert('Thông Báo', 'Bạn đang có 1 chuyến dang giao khác', [
                                        {
                                            text: 'OK',
                                            style: "destructive",
                                            onPress: () => { }
                                        },
                                    ]);
                                    return;
                                }

                                let checkLocationPermisson = await _requestLocationPermisson();

                                if (!checkLocationPermisson) {
                                    return;
                                }

                                let saveData = JSON.stringify({
                                    'item': item,
                                    'listGoods': rawwData.item,
                                    'phone': rawwData.phone,
                                    'docTotal': rawwData.docTotal,
                                    'isDeliveringLast': isDeliveringLast,
                                });

                                let checkSaveDeliveringToStorage = await _saveDeliveringToStorage(saveData);

                                if (!checkSaveDeliveringToStorage) {
                                    return;
                                }

                                if (isNotDelivering) {
                                    // let checkPostTimeStart = await postTimeStart({ deliveryNumber: deliveringNumber });

                                    // if (!checkPostTimeStart) {
                                    //     return;
                                    // }

                                    let storePosition = JSON.stringify({
                                        'latitude': item.Latitude,
                                        'longitude': item.Longitude
                                    });

                                    let checkGetLocation = await _getLocation(storePosition);

                                    if (checkGetLocation) {
                                        navigation.replace('Delivering', { isDeliveringLast: isDeliveringLast });
                                    }

                                } else {
                                    let storePosition = JSON.stringify({
                                        'latitude': item.Latitude,
                                        'longitude': item.Longitude
                                    });

                                    let checkGetLocation = await _getLocation(storePosition);


                                    if (checkGetLocation) {
                                        navigation.replace('Delivering', { isDeliveringLast: isDeliveringLast });
                                    }
                                }

                            }}>
                            <Text style={StylesOfSaleOrderScreen.textButtonStartStyle}>{saleOrderStrings.Start_Delivering_Text}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={StylesOfSaleOrderScreen.buttonDenyStyle}
                            onPress={() => { console.log(isDeliveringLast); }}>
                            <Text style={StylesOfSaleOrderScreen.textButtonStartStyle}>{saleOrderStrings.Deny_Delivering_Text}</Text>
                        </TouchableOpacity>
                    </View>
            }
        </View>

    </SafeAreaView>
}

export default SaleOrderScreen;