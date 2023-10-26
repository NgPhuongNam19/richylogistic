import { StyleSheet } from "react-native";
import CustomColors from "../../../constants/color";

export const StyleOfQRScreen = StyleSheet.create({
    textBlockViewCameraNull: {
        color: CustomColors.Secondary_Yellow,
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center"
    },
    blockViewCameraNull: {
        alignItems: "center",
        justifyContent: "center",
        height: '100%',
        backgroundColor: CustomColors.Primary_Blue,
    },
})