import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function _saveDeliveringToStorage(item) {
    try {
        await AsyncStorage.setItem('Delivering', item);
        console.log('Saved!');
        return true;
    } catch (error) {
        console.log('Lỗi lưu vào bộ nhớ: ' + error);
        return false;
    }
}