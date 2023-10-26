import Geolocation from "react-native-geolocation-service";
import _openGgMaps from "./func-open-GoogleMaps";
import { Alert } from "react-native";

export default async function _getLocation(storeLocation) {
    try {
        Geolocation.getCurrentPosition(
            (positon) => {
                console.log('Láy vị trí thành công');
                Alert.alert('Bạn có muốn mở Google Maps?', 'Mở maps để bật tính năng chỉ đường', [
                    {
                        text: 'Không',
                        style: 'cancel',
                        onPress: () => console.log('Cancel Pressed'),
                    },
                    {
                        text: 'Có',
                        style: "destructive",
                        onPress: async () => {
                            await _openGgMaps(positon, storeLocation);
                        }
                    },
                ]);
            },
            (error) => {
                console.log('Lỗi khi lấy vị trí: ' + error);
            },
            { accuracy: { android: 'high', ios: 'best' }, enableHighAccuracy: true, timeout: 8000, maximumAge: 10000, showLocationDialog: true }
        );
        return true;
    } catch (error) {
        console.log(error);
        return false
    }
}