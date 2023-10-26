import { View, TouchableOpacity, Text } from "react-native";
import { StylesOfLoginScreen } from "../Styles/styles-of-login";
import CustomColors from "../../../constants/color";

function ButtonNewAccount() {
    return <View style={StylesOfLoginScreen.buttonNewAccountStyle}>
        <Text style={{ color: 'grey', fontSize: 18, }}>Bạn chưa có tài khoản?</Text>
        <TouchableOpacity >
            <Text style={{ color: CustomColors.Primary_Red, fontSize: 18, fontWeight: "bold" }}> Đăng Ký</Text>
        </TouchableOpacity>
    </View>
}

export default ButtonNewAccount;