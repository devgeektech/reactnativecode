import React from "react";
import styles from "./styles";
import { CheckBox } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../utils/Theme'


const SLCheckBox = ({ title, isSelected = false, onPress }) => {
    return (
        <CheckBox
            onPress={onPress}
            title={title}
            iconRight
            right
            checked={isSelected}
            textStyle={styles.checkBoxText}
            containerStyle={styles.checkBoxContainer}
            wrapperStyle={styles.checkBoxWrapperStyle}
            checkedIcon={<MaterialCommunityIcons name={"checkbox-marked"}
                size={20} color={theme.appColor} />}
            uncheckedIcon={<MaterialCommunityIcons name={"checkbox-blank-outline"}
                size={20} color={theme.unCheckColor} />}
        />
    );
};

export default SLCheckBox;
