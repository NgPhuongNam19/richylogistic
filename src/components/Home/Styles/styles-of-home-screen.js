import { StyleSheet } from "react-native";
import CustomColors from "../../../constants/color";


export const StylesOfHomeScreen = StyleSheet.create({
    welcomeTextStyle: {
        fontSize: 18,
        fontWeight: "300",
        marginBottom: 5,
        color: CustomColors.Primary_Blue
    },
    fullNameTextStyle: {
        fontSize: 24,
        fontWeight: "700",
        color: CustomColors.Primary_Blue
    },
    transferStatusTextStyle: {
        fontWeight: '700',
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
    },
    textInForCargoStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: CustomColors.Primary_Blue
        // marginBottom: 10
    },
    boxHeaderStyle: {
        alignSelf: 'center',
        width: '90%',
        marginTop: 5
    },
    boxTitleAndFilterStyle: {
        overflow: "scroll",
        width: '95%',
        height: '6%',
        marginTop: 20,
        paddingStart: 15,
        paddingEnd: 15,
        borderRadius: 20,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: CustomColors.Primary_Blue,
    },
    boxFilterUnselectedStyle: {
        alignItems: 'center',
        // width: '49%'
    },
    // boxDropDownFilterStyle: {
    //     width: '80%',
    //     alignSelf: 'center',
    //     borderColor: CustomColors.Primary_Blue,
    //     borderWidth: 1
    // },
    boxItemListCargo: {
        backgroundColor: 'white',
        height: 100,
        flexDirection: 'row',
        marginBottom: 15,
        alignSelf: "center",
        elevation: 5,
        shadowOffset: { height: 5 },
        shadowRadius: 4,
        shadowOpacity: 0.7,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: CustomColors.Primary_Blue
    },
    boxIsTransferingStyle: {
        padding: 5,
        width: '22%',
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        backgroundColor: CustomColors.Primary_Yellow,
        justifyContent: 'center',
    },
    boxIsTransferedStyle: {
        padding: 5,
        width: '22%',
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        backgroundColor: 'green',
        justifyContent: 'center',
    },
    boxIsNotTransferedStyle: {
        padding: 5,
        width: '22%',
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        backgroundColor: CustomColors.Primary_Red,
        justifyContent: 'center',
    },
    boxCargoInformationStyle: {
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        width: '70%',
        justifyContent: 'space-evenly',
        padding: 10,
    },
});