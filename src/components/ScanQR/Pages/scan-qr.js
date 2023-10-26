import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Camera, useCameraDevice, useCodeScanner } from "react-native-vision-camera";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { StyleOfQRScreen } from "../Styles/styles-of-qr-screen";
import CustomColors from "../../../constants/color";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { scanQRStrings } from "../../../constants/string";

function QRScanScreenn({ navigation, route }) {
    const [cameraPermission, setcameraPermission] = useState('');
    const [isActive, setIsACtive] = useState(false);
    const { isDeliveringLast } = route.params;
    const device = useCameraDevice('back');

    navigation = useNavigation();

    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes) => {
            navigation.navigate('ChooseReason', {isDeliveringLast: isDeliveringLast, valueFromQR: codes[0].value})
        },
    });

    async function getCameraPermisson() {
        const cameraPermission = await Camera.getCameraPermissionStatus();
        // const listCamera = await Camera.getAvailableCameraDevices()
        // listCamera.forEach(element => {
        //     console.log(element.devices);
        // });
        // console.log(cameraPermission);
        if (cameraPermission == 'not-determined' || cameraPermission == 'denied') {
            const newcameraPermission = await Camera.requestCameraPermission();
            if (newcameraPermission == 'denied') {
                console.log('Truy cập bị từ chối');
            } else {
                console.log('Truy cập được thực hiện');
                setcameraPermission('granted');
                // setIsACtive(true);
            }
        } else if (cameraPermission == 'granted') {
            setcameraPermission('granted');
            // setIsACtive(true);
        }
    }

    useFocusEffect(
        useCallback(() => {
            console.log('Screen was focused');
            console.log(isDeliveringLast);
            setIsACtive(true);
            return () => {
                console.log('Screen was unfocused');
                setIsACtive(false);
                // setShowCamera(false);
            };
        }, [])
    );

    useEffect(() => {
        getCameraPermisson();
    }, []);

    if (device == null) {
        console.log('device null');
        return <View style={StyleOfQRScreen.blockViewCameraNull}><Text style={StyleOfQRScreen.textBlockViewCameraNull}>{scanQRStrings.Reques_Permisson_Text}</Text></View>
    }

    return <SafeAreaView edges={'bottom'}>
        <StatusBar barStyle="light-content" />
        {cameraPermission == 'granted'
            ? <View style={{ height: '100%', backgroundColor: CustomColors.Primary_Blue, padding: 10 }} >
                <View style={{ height: '90%', marginTop: 10, borderRadius: 30 }}>
                    <Camera style={StyleSheet.absoluteFillObject} device={device} isActive={isActive} codeScanner={codeScanner} />
                </View>
            </View>
            : <View style={StyleOfQRScreen.blockViewCameraNull}><Text style={StyleOfQRScreen.textBlockViewCameraNull}>{scanQRStrings.Reques_Permisson_Text}</Text></View>
        }

    </SafeAreaView>
}

export default QRScanScreenn;
