import React from "react";
import styles from "./styles";
import { FlatList, View } from "react-native";
import {TextInputLabel,TextInput} from './index'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Theme from "../utils/Theme";
import { TouchableOpacity } from "react-native";
const SLThreat = ({ list, onPressItem,onPressDeleteIcon}) => {
    const renderItem = ({ item }) => {
        return (

            <View style={styles.cardContainer}>
                <View style={styles.SLHeader}>
                    <TextInputLabel text={"Threat"} />
                    <TouchableOpacity onPress={()=>onPressDeleteIcon(item)}>
                        <MaterialCommunityIcons
                         name="delete-outline" 
                         color={Theme.appColor} 
                         style={{alignSelf:"center"}} 
                         size={30}
                         />
                    </TouchableOpacity>
                </View>
                <TextInput
                    value={item.ThreatName}
                    editable={false} />
                <TextInputLabel text={"Mitigation"} />
                <TextInput
                    value={item.MatigationName}
                    editable={false} multiline ={true}/>
            </View>
            // <SLCheckBox title={item.title} isSelected={item.isSelected} onPress={() => onPressItem(item)} />
        )
    }
    return (
        <FlatList
            contentContainerStyle={styles.flatListContainer}
            data={list}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    );
}
export default SLThreat