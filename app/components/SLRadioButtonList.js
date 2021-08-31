import React from "react";
import styles from "./styles";
import { FlatList } from "react-native";
import SLRadioButton from "./SLRadioButton";

const SLRadioButtonList = ({ list, onPressItem }) => {
    // console.log(onPressItem)
    const renderItem = ({ item }) => {
        return (
            <SLRadioButton title={item.title} isSelected={item.isSelected} onPress={() => onPressItem(item)} />
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

export default SLRadioButtonList;
