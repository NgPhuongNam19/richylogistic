import { Alert, Linking, Platform } from "react-native";

export default async function _openGgMaps(userLocation, storeLocationJson) {
    const storeLocation = JSON.parse(storeLocationJson);
    try { 
        const userLatLng = `${userLocation.coords.latitude}+${userLocation.coords.longitude}`;
        const storeLatLng = `${storeLocation.latitude}+${storeLocation.longitude}`;
        const url = Platform.select({
            ios: `googleMaps://app?saddr=${userLatLng}&daddr=${storeLatLng}`,
            // android: `http://maps.google.com/maps?saddr=${userLatLng}&daddr=${storeLatLng}`
            android: `https://www.google.com/maps/dir/?api=1&origin=${userLatLng}&destination=${storeLatLng}`

        });
        await Linking.openURL(url);
        return true;
    } catch (error) {
        console.log(error);
        Alert.alert('Thông báo', 'Đã có lỗi khi mở Google Maps', [
            {
                text: 'OK',
                style: "destructive",
                onPress: async () => {}
            },
        ]);
        return false;
    }
};

// navigation.navigate('MapScreen', { geolocation: positon });
// comgooglemaps://?center=${latitude},${longitude}&q=${latitude},${longitude}&zoom=14&views=traffic"
// const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
// const coordinates = 'Custom Label';
// ios: `comgooglemaps://?center=${latLng}&q=21.0257349,105.8532745&zoom=14&views=traffic`,
// ios: `google.navigation:q=${latLng}`,

// const _getLocation = async (item, navigation) => {
//     console.log(`${item.Latitude}   +   ${item.Longitude}`);
//     try {
//         Geolocation.getCurrentPosition(
//             async (positon) => {
//                 console.log(positon);
//                 // navigation.navigate('MapScreen', { geolocation: positon });
//                 // comgooglemaps://?center=${latitude},${longitude}&q=${latitude},${longitude}&zoom=14&views=traffic"
//                 const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
//                 const latLng = `${positon.coords.latitude}+${positon.coords.longitude}`;
//                 const latLong = `${item.Latitude}+${item.Longitude}`
//                 const coordinates = 'Custom Label';
//                 const url = Platform.select({
//                     ios: `googleMaps://app?saddr=${latLng}&daddr=${item.Latitude}+${item.Longitude}`,
//                     // ios: `comgooglemaps://?center=${latLng}&q=21.0257349,105.8532745&zoom=14&views=traffic`,
//                     // ios: `google.navigation:q=${latLng}`,
//                     android: `${scheme}${latLng}(${coordinates})`
//                 });


//                 await Linking.openURL(url);
//                 navigation.popToTop();
//             },
//             (error) => { console.log(error); },
//             { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//         );
//     } catch (error) {
//         console.log(error);
//     }
// }