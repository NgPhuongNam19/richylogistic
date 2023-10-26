import { FlatList, Linking, Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import CustomStrings, { detailDeliveryStrings } from "../../../constants/string";
import { SafeAreaView } from "react-native-safe-area-context";
import { ModalStyles, StylesOfCargoDetailScreen } from "../Styles/styles-of-cargo-detail-screen";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import InforCargoDetail from "../VIews/views-of-infors-cargo-detail";


function CargoDetailScreen({ route, navigation }) {
    const { deliveryNumber } = route.params;
    const { saleOrders } = route.params;
    // const [showModal, setShowModal] = useState(false);

    navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: detailDeliveryStrings.Header_Title_Text + ' ' + deliveryNumber });
        // saleOrders.forEach(e => {
           
        // });

    })

    return <SafeAreaView edges={['right', 'left', 'bottom']} style={{ backgroundColor: 'white', height: '100%' }}>
        <View>
            <FlatList style={{ marginTop: 10, height: '100%' }} data={saleOrders} renderItem={({ item }) =>
                <TouchableOpacity style={StylesOfCargoDetailScreen.boxItemSaleOrdersStyle}
                    onPress={() => {
                        // if (item.IsTransfered === true) {
                        // } else {
                        //     setShowModal(true);
                        // }
                        navigation.navigate('SaleOrder', { item: item, deliveringNumber: deliveryNumber, listItems: saleOrders });
                    }}>
                    
                    <InforCargoDetail item={item} />

                </TouchableOpacity>
            } />

        </View>

    </SafeAreaView>

}

export default CargoDetailScreen;

{/* <Modal
                        animationType="fade"
                        transparent={true}
                        visible={showModal}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setShowModal(false);
                    }}
                    >
                        <TouchableOpacity style={ModalStyles.centeredView} onPress={() => { setShowModal(false) }}>
                            <View style={ModalStyles.modalView}>
                                <View style={{ marginBottom: 15 }}>
                                    <Text style={ModalStyles.modalText}>Phiếu: {item.ErpRecord}</Text>
                                    <Text style={ModalStyles.modalText}>Nhà: {item.CardName}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Pressable
                                        style={[ModalStyles.button, ModalStyles.buttonOpen]}
                                        onPress={() => {
                                            Linking.openURL('googleMaps://app')
                                            setShowModal(false)
                                        }}>
                                        <Text style={ModalStyles.textStyle}>{CustomStrings.Text_Begin_Delivery}</Text>
                                    </Pressable>
                                    <Pressable
                                        style={[ModalStyles.button, ModalStyles.buttonClose]}
                                        onPress={() => {
                                            navigation.navigate('SaleOrder', { item: item });
                                            setShowModal(false);
                                            
                                        }}>
                                        <Text style={ModalStyles.textStyle}>{CustomStrings.Modal_Text_Show_Detail_SO}</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Modal> */}
