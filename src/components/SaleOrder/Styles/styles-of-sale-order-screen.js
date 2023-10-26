import { StyleSheet } from "react-native";
import CustomColors from "../../../constants/color";

export const StylesOfSaleOrderScreen = StyleSheet.create({
    textButtonStartStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textInforSaleOrderStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
        marginStart: 10,
        marginHorizontal: 5, 
        overflow: 'hidden',
        color: CustomColors.Primary_Blue
    },
    textTotalStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
        marginStart: 0,
        alignSelf: 'flex-end',
        color: CustomColors.Primary_Red
    },
    textInSOInforStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: CustomColors.Primary_Blue
        // marginBottom: 10
    },
    boxButtonStartStyle: {
        width: '95%',
        height: '15%',
        alignSelf: 'center',
        marginTop: 5
        // position: 'absolute',
        // bottom: '4%',
    },
    buttonStartStyle: {
        width: '50%',
        backgroundColor: CustomColors.Primary_Red,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        justifyContent: 'center'
    },
    buttonDenyStyle: {
        width: '50%',
        backgroundColor: CustomColors.Primary_Blue,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        justifyContent: 'center'
    },
    boxDoneStyle: {
        backgroundColor: 'green',
        borderRadius: 10,
        justifyContent: 'center',
        height: '60%'
    },
    boxDeliveringStyle: {
        backgroundColor: CustomColors.Primary_Yellow,
        borderRadius: 10,
        justifyContent: 'center',
        height: '60%'
    },
    dividerStyle: {
        height: 1,
        backgroundColor: CustomColors.Primary_Blue,
        marginBottom: 10,
    },
    boxSOInforStyle: {
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: CustomColors.Primary_Blue,
        // borderLeftWidth: 1,
        backgroundColor: 'white',
        alignSelf: "center",
        width: '95%',
        justifyContent: 'space-evenly',
        padding: 10,
        marginBottom: 15,
        elevation: 10,
        shadowOffset: { height: 5 },
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOpacity: 0.7,
    },
    boxTextGoodsInforStyle: {
        flexDirection: 'row', 
        marginBottom: 3
    }
})