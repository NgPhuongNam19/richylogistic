import React from "react";
import { Image, StatusBar, Text, View } from "react-native";
import CustomColors from "../../../constants/color";
import { StylesOfLoginScreen } from "../Styles/styles-of-login";
import LoginForm from '../Views/login-form';
import ButtonNewAccount from "../Views/button-new-account";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonForgotPassWord from "../Views/button-forgot-password";
import { loginStrings } from "../../../constants/string";


function LoginScreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: CustomColors.Primary_Blue, alignItems: "flex-end" }}>
            <StatusBar
                barStyle="light-content"
            />
            <Image source={require('../../../assets/LogoRichy.png')}
                style={StylesOfLoginScreen.imageLogoLoginStyle}></Image>
            <View style={StylesOfLoginScreen.loginFormStyle}>
                <Text style={StylesOfLoginScreen.textWelcomeLoginStyle}>{loginStrings.WelCome_Text}</Text>
                <LoginForm />
                <ButtonForgotPassWord />
            </View>
        </SafeAreaView>);
}

export default LoginScreen;