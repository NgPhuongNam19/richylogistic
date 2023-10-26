import { Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CustomColors from "../../../constants/color";


export default function ItemMenu({ icon, title, onPressGetData }) {
    return <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', padding: 10, paddingStart: 15, justifyContent: 'space-between' }}
        onPress={onPressGetData}>
        <View style={{ backgroundColor: CustomColors.Primary_Blue, borderRadius: 5, padding: 1 }}>
            <MaterialCommunityIcons
                name={icon}
                color='white'
                size={25} />
        </View>
        <View style={{ width: '85%', flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', }}>
            <Text style={{ fontSize: 18, color: CustomColors.Primary_Blue }}>{title}</Text>
            <MaterialIcons name="arrow-forward-ios" size={20} />
        </View>
    </TouchableOpacity>
}