import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { StylesOfLoginScreen } from "../Styles/styles-of-login";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import CustomStrings, { bottomNavigationTabStrings, homeStrings, loginStrings } from "../../../constants/string";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import GetAllCargoes from "../../Home/Services/get-cargoes-from-api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomColors from "../../../constants/color";

function LoginForm() {
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const [showPassword, setshowPassword] = useState(true);
    const navigation = useNavigation();

    return <View>
        <TextInput
            style={StylesOfLoginScreen.textInputLoginStyle}
            placeholder={loginStrings.User_Name_Place_Holder}
            placeholderTextColor={'grey'}
            value={userName}
            clearButtonMode="always"
            onChangeText={(text) => setUserName(text)} />

        <View style={StylesOfLoginScreen.boxTextInputPasswdStyles}>
            <TextInput
                style={StylesOfLoginScreen.textInputPassWordStyle}
                placeholder={loginStrings.Password_Place_Holder}
                secureTextEntry={showPassword}
                placeholderTextColor={'grey'}
                value={passWord}
                clearButtonMode="always"
                onChangeText={(text) => setPassWord(text)}
                onSubmitEditing={() => _checkLogin({ navigation, userName, passWord })} />
            {showPassword === true
                ? <TouchableOpacity onPress={() => { setshowPassword(false) }}>
                    <MaterialCommunityIcons name="eye-off-outline" size={28} color={CustomColors.Primary_Blue} />
                </TouchableOpacity>
                : <TouchableOpacity onPress={() => { setshowPassword(true) }}>
                    <MaterialCommunityIcons name="eye-outline" size={28} color={CustomColors.Primary_Blue} />
                </TouchableOpacity>
            }
        </View>

        <TouchableOpacity
            style={StylesOfLoginScreen.buttonLoginStyle}
            onPress={() => _checkLogin({ navigation, userName, passWord })}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>{loginStrings.Login_Btn_Text}</Text>
        </TouchableOpacity>
    </View>

}

const _checkLogin = async ({ navigation, userName, passWord }) => {
    if (userName == '' || passWord == '') {
        Alert.alert('Thông Báo', 'Không để trống tên đăng nhập hoặc mật khẩu', [
            {
                text: 'OK',
                style: "destructive",
                onPress: async () => { }
            },
        ]);
        return;
    }

    let data = JSON.stringify({
        "UserName": userName,
        "PassWord": passWord
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://hrm.richy.com.vn:5757/api/RichyPortal/Employee/Login',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    await axios.request(config)
        .then((response) => {
            const obj = JSON.parse(JSON.stringify(response.data));
            if (obj.ok == true) {
                _saveUser(navigation, userName, passWord, obj.fullName);
            } else {
                Alert.alert('Thông Báo', 'Tên đăng nhập hoặc mật khẩu sai, vui lòng kiểm tra lại', [
                    {
                        text: 'OK',
                        style: "destructive",
                        onPress: async () => { }
                    },
                ])
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

const _saveUser = async (navigation, userName, passWord, fullName) => {
    let saveData = JSON.stringify({
        "UserName": userName,
        "PassWord": passWord,
        "FullName": fullName,
        "TimeSignedIn": Date.now()
    });

    try {
        await AsyncStorage.setItem('UserData', saveData);
        console.log(saveData);
        console.log(fullName);
        navigation.replace('HomeTab', {
            screen: bottomNavigationTabStrings.Navigator_Tab_Home,
            params: { fullName: fullName, userName: userName, welcomeText: homeStrings.Welcome_Text }
        });
    } catch (error) {
        console.log(error);
    }
}

export default LoginForm;