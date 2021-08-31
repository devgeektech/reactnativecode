import React, { useState } from "react";
import { View,TextInput,StyleSheet,TouchableOpacity } from 'react-native'
import {  } from 'react-native-gesture-handler'
import { Input,TextArea } from 'native-base'
import Theme from '../utils/Theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TextInputRN = ({
    placeHolder,
    editable = true,
    isRightIconVisible = false,
    rightIconName = "calendar",
    isKeyboardTypeNumber = false,
    multiline = false,
    value,
    onPressRightIcon,
    isCalendar=false,
    showCloseIcon=false,
    onPressRightCalendarClose,
    otherInputContainerStyle={},
    onChangeText
}) => {
    const styles=StyleSheet.create({
        rightIconContainer:{
            paddingRight:10,
            flexDirection:'row'
        },
        inputContainerStyle:{
            borderBottomWidth: 0,
            paddingTop: 8,
            backgroundColor: "#fff",
            ...otherInputContainerStyle
        },
        inputStyle:{
            fontSize: multiline ? 12 : 28,
            fontFamily:"Raleway",
        }
})
    return (
        multiline?
        <TextArea 
            value={value}
            onChangeText={onChangeText}
            editable={editable}
            placeholder={placeHolder}
            autoCapitalize="none"
            autoCompleteType='off'
            numberOfLines={20}
            backgroundColor={editable?"#fff":"#f5f5f5"}
        />:
        <Input
            backgroundColor={editable?"#fff":"#f5f5f5"}
            clearButtonMode="while-editing"
            style={[otherInputContainerStyle]}
            textAlignVertical="top"
            variant="outline"
            value={value}
            onChangeText={onChangeText}
            editable={editable}
            placeholder={placeHolder}
            keyboardType={isKeyboardTypeNumber ? 'numeric' : 'default'}
            autoCapitalize="none"
            autoCompleteType='off'
            numberOfLines={multiline?4:1}
            inputStyle={styles.inputStyle}
            InputRightElement={isRightIconVisible &&
                    <View style={styles.rightIconContainer}>
                        
                         {(isCalendar&&value)?
                        
                            <MaterialCommunityIcons 
                                name={"close"} 
                                size={30} 
                                color={Theme.appColor} 
                                onPress={onPressRightCalendarClose}
                                style={{paddingRight:10}}
                            /> :null
                      
                         }  
                        
                        <MaterialCommunityIcons 
                            name={rightIconName} 
                            size={30} 
                            color={Theme.appColor} 
                            onPress={onPressRightIcon}
                        />
                     </View>
            }
            inputContainerStyle={styles.inputContainerStyle}
            _focus
        />

    );
    
}

export default TextInputRN;