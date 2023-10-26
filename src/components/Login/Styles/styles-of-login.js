import { Dimensions, StyleSheet } from "react-native";
import CustomColors from "../../../constants/color";

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

export const StylesOfLoginScreen = StyleSheet.create({
    loginFormStyle: {
        width: '100%',
        height: ScreenHeight * 0.75,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        shadowRadius: 7,
        shadowOpacity: 0.5,
        shadowColor: '#000000'
    },
    imageLogoLoginStyle: {
        width: ScreenWidth * 0.5,
        height: 150,
        resizeMode: "cover",
        alignSelf: 'center',
    },
    textWelcomeLoginStyle: {
        fontSize: 28,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 30,
        fontWeight: 'bold',
        color: CustomColors.Primary_Blue
    },
    textInputLoginStyle: {
        borderWidth: 2,
        borderColor: CustomColors.Primary_Blue,
        borderRadius: 20,
        padding: 10,
        alignSelf: 'center',
        width: '90%',
        height: 60,
        marginBottom: 15,
        fontSize: 18
    },
    textInputPassWordStyle: {
        padding: 10,
        height: 60,
        fontSize: 18,
        width: '87%',
    },
    boxTextInputPasswdStyles: {
        borderWidth: 2,
        borderColor: CustomColors.Primary_Blue,
        borderRadius: 20,
        width: '90%',
        alignSelf: 'center',
        marginBottom: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    buttonLoginStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        alignSelf: 'center',
        width: '90%',
        height: 50,
        marginBottom: 15,
        backgroundColor: CustomColors.Primary_Red,
    },
    buttonNewAccountStyle: {
        flexDirection: "row",
        alignSelf: 'center',
        bottom: 0,
        height: 50,
        position: 'absolute',
        justifyContent: "center"
    },
})