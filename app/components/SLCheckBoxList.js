import React from "react";
import styles from "./styles";
import { FlatList } from "react-native";
import SLCheckBox from "./SLCheckBox";

const SLCheckBoxList = ({ list, onPressItem }) => {
    const renderItem = ({ item }) => {
        // debugger
        return (
            <SLCheckBox title={item.ItemName} isSelected={item.IsSelected==0?false:true} onPress={() => onPressItem(item)} />
        )
    }
    return (
        <FlatList
            contentContainerStyle={styles.flatListContainer}
            data={list}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
        />
    );
};

export default SLCheckBoxList;
