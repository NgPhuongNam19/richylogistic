import { View, Text, TouchableOpacity, Alert } from "react-native";
import CustomColors from "../../../constants/color";
import { loginStrings } from "../../../constants/string";

function ButtonForgotPassWord() {
    return <View style={{ marginTop: 15, alignItems: "center" }}>
        <TouchableOpacity
        onPress={() => {
            Alert.alert('Thông Báo', 'Vui lòng liên hệ phòng IT để được hỗ trợ', [
                {
                    text: 'OK',
                    style: "destructive",
                    onPress: async () => { }
                },
            ]);
        }}>
            <Text
                style={{ fontSize: 18, color: CustomColors.Primary_Blue }}>{loginStrings.Forgot_Password_Btn_Text}
            </Text>
        </TouchableOpacity>

    </View>
}

export default ButtonForgotPassWord;