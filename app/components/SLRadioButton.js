import React from "react";
import styles from "./styles";
import { CheckBox } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../utils/Theme'


const SLRadioButton = ({ title, isSelected = false, onPress }) => {
    return (
        <CheckBox
            onPress={onPress}
            title={title}
            containerStyle={styles.radioButtonContainer}
            checkedIcon={<MaterialCommunityIcons name={"radiobox-marked"}
                size={20} color={theme.appColor} />}
            uncheckedIcon={<MaterialCommunityIcons name={"radiobox-blank"}
                size={20} color={theme.unCheckColor} />}
            checked={isSelected}
        />
    );
};

export default SLRadioButton;
