import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import GetReason from "../Service/get-reason";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, SectionList, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { Divider, Text } from "react-native-paper";
import CustomColors from "../../../constants/color";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ChooseReasonScreen({ route, navigation }) {
    const { isDeliveringLast } = route.params;
    const { valueFromQR } = route.params;
    const [reasonData, setReasonData] = useState([]);

    const deleteDeliveringDataInStorage = async () => {
        try {
            await AsyncStorage.removeItem('Delivering');
        } catch (e) {
            console.log(e);
        }

    }

    const createTwoButtonAlert = (reason) =>
        Alert.alert('Bạn chắc chắn chọn lí do này?', 'Lí do: ' + reason, [
            {
                text: 'Không',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'Có - KT Đơn',
                style: "destructive",
                onPress: () => { 
                    console.log('OK Pressed');
                    deleteDeliveringDataInStorage();
                    navigation.reset({
                        index: 0,
                        routes: [{name: 'Splash'}],
                      });    
                }
            },
        ]);

    navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: valueFromQR });

        async function getReason() {
            let data = await GetReason();
            let successReason = data[0];
            data.shift();
            const DATA = [
                {
                    title: 'Thành Công',
                    data: [successReason],
                },
                {
                    title: 'Thất Bại',
                    data: data,
                },
            ];
            setReasonData(DATA);
        };

        let ignore = false;
        getReason();

        return () => {
            ignore = true;
        }
    }, [])

    return <SafeAreaView style={{}} edges={['bottom']}>
        <SectionList
            // style={{backgroundColor: 'red', width: '100%'}}
            sections={reasonData}
            // keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
                <View style={{ marginBottom: 20 }}>
                    <TouchableOpacity style={styles.item}
                        onPress={() => { createTwoButtonAlert(item.label) }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.title, { fontWeight: 'bold' }]}>Lí do: </Text>
                            <Text style={styles.title}>{item.label}</Text>
                        </View>
                    </TouchableOpacity>
                    <Divider style={{ width: '90%', backgroundColor: CustomColors.Primary_Blue, alignSelf: 'center', }} />
                </View>

            )}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
            )}
        />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    item: {
        // backgroundColor: '#f9c2ff',
        paddingTop: 20,
        paddingBottom: 20,
        // marginVertical: 8,
        width: '90%',
        alignSelf: 'center'
    },
    header: {
        color: CustomColors.Primary_Blue,
        fontSize: 26,
        paddingStart: 15,
        backgroundColor: 'lightgrey',
        paddingBottom: 5,
        paddingTop: 5
    },
    title: {
        fontSize: 20,
        color: CustomColors.Primary_Blue
    },
});