import { StyleSheet } from "react-native";
import CustomColors from "../../../constants/color";

export const StyleOfDeliveringScreen = StyleSheet.create({
    othersTextStyle: {
        fontWeight: '400',
        textAlignVertical: "center",
        marginStart: 7,
        marginEnd: 10,
        fontSize: 20
    },
    textTotalStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
        marginStart: 0,
        alignSelf: 'center',
        color: CustomColors.Primary_Red
    },
    textSOInfor: {
        width: '80%',
        marginLeft: 5,
        fontSize: 16,
        color: CustomColors.Primary_Blue
    },
    boxBottomMenuStyle: {
        height: '10%',
        // backgroundColor: 'red',
        alignSelf: 'center',
        width: '90%',
        // padding: 10,
        // marginBottom: 15,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    blockInforIsBeingDeliveriedStyle: {
        height: '100%',
        width: '90%',
        paddingTop: 10,
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: CustomColors.Primary_Blue,
        justifyContent: 'flex-end',
        backgroundColor: 'white',
        elevation: 10,
        shadowOffset: { height: 2, },
        shadowRadius: 8,
        shadowOpacity: 0.8,
    },
    dividerStyle: {
        height: 1,
        backgroundColor: CustomColors.Primary_Blue,
    },
    verticalDividerStyle: {
        width: 1, 
        height: '70%', 
        backgroundColor: CustomColors.Primary_Blue
    },
})