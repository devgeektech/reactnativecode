import React from "react";
import { View, } from "react-native";
import styles from "./styles";
import {TextInputLabel,SLCheckBoxList} from './index'


const SLCheckBoxCard = ({ headerTitle, list, onPress }) => {
    // debugger
    return (
        <View style={styles.checkBoxCardContainer}>
            <TextInputLabel text={headerTitle}  />
            <SLCheckBoxList list={list} onPressItem={(item) => onPress(item)} />
        </View>
    );
};

export default SLCheckBoxCard;
