import { StyleSheet } from "react-native";
import CustomColors from "../../../constants/color";

export const StylesOfCargoDetailScreen = StyleSheet.create({
    titleTextStyle: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: 'center',
    },
    deliveryTextStyle: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 18,
    },
    cardNameTextStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingEnd: 10,
        marginEnd: 10,
        marginBottom: 5,
        marginStart: 5,
        color: CustomColors.Primary_Blue
    },
    cardAddressTextStyle: {
        fontWeight: '400',
        paddingEnd: 10,
        marginStart: 7,
        marginBottom: 5,
        overflow: 'hidden',
        fontSize: 18,
        color: CustomColors.Primary_Blue
    },
    othersTextStyle: {
        fontWeight: '400',
        textAlignVertical: "center",
        marginStart: 7,
        marginEnd: 10, 
        fontSize: 18,
        color: CustomColors.Primary_Blue
    },
    boxItemSaleOrdersStyle: {
        width: '90%',
        paddingTop: 10,
        paddingStart: 10,
        marginBottom: 15,
        alignSelf: "center",
        backgroundColor: 'white',
        borderColor: CustomColors.Primary_Blue,
        borderWidth: 0.5,
        borderRadius: 10,
        elevation: 10,
        shadowOffset: { height: 5 },
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOpacity: 0.7,
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'flex-end'
    },
    boxIsNotDeliveried: {
        backgroundColor: CustomColors.Primary_Red,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        height: 35,
        borderBottomEndRadius: 10,
        borderTopStartRadius: 10,
        padding: 5
    },
    boxIsDeliveried: {
        backgroundColor: 'green',
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        height: 35,
        borderBottomEndRadius: 10,
        borderTopStartRadius: 10,
        padding: 5
    }
});

export const ModalStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(150, 150, 150, 0.8)',
    },
    modalView: {
        width: '85%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 2,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        // borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: '50%'
    },
    buttonClose: {
        backgroundColor: CustomColors.Primary_Blue,
        borderRadius: 10,
        width: '80%'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 22
    },
    modalText: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 22
    },
});