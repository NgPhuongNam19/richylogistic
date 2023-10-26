import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function _checkDataExitsInStorage(stringKey) {
    try {
        const jsonValue = await AsyncStorage.getItem(stringKey);
        if (jsonValue == null) {
            console.log('Không có dữ liệu');
            return false;
        } else {
            console.log('Có dữ liệu');
            return true;
        }
    } catch (e) {
        console.log('Lỗi check tồn tại dữ liệu trong bộ nhớ : ' + e);
        return false;
    }
};