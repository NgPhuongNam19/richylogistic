import { FlatList } from "react-native";
import ItemDelivery from "../Views/box-item-deliver";

export default function ListDeliveriedScreen( {route} ) {
    const {listDeliveried} = route.params;

    return <FlatList style={{width: '95%', alignSelf: 'center', paddingTop: 10}} data={listDeliveried} renderItem={({ item }) =>
        <ItemDelivery deliveryNumber={item.DeliveryNumber} marginBottom={15}/>
    } />
}