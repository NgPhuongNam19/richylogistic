import Geolocation from "react-native-geolocation-service";
import { Linking, PermissionsAndroid, Platform, ToastAndroid } from "react-native";

export default async function _requestLocationPermisson() {

    const hasPermissionIOS = async () => {
        const requestLocationPermisson = await Geolocation.requestAuthorization('always');
        if (requestLocationPermisson == 'disabled') {
            console.log('Vị trí đang tắt');
            await Linking.openURL('App-Prefs');
            return false;
        }
        else if (requestLocationPermisson == 'granted') {
            console.log('Được cấp quyền vị trí');
            return true;
        }
        else if (requestLocationPermisson == 'denied') {
            console.log('Quyền vị trí bị từ chối');
            await Linking.openSettings();
            return false;
        }
    };

    try {
        if (Platform.OS === 'ios') {
            const hasPermission = await hasPermissionIOS();
            return hasPermission;
        }

        if (Platform.OS === 'android' && Platform.Version < 23) {
            return true;
        } else if (Platform.OS === 'android') {
            const hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

            if (hasPermission) {
                return true;
            }

            const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

            if (status === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('status');
                return true
            }

            if (status === PermissionsAndroid.RESULTS.DENIED) {
                ToastAndroid.show('Bạn đã từ chối quyền truy cập vị trí lần này', ToastAndroid.SHORT);
                return false
            }

            if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
                ToastAndroid.show('Bạn đã không đồng ý cấp quyền vị trí cho ứng dụng', ToastAndroid.SHORT);
                return false
            }
        }
    } catch (e) {
        console.log('Lỗi cấp quyền vị trí: ' + e);
        return false;
    }
}