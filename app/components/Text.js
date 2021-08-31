import React from 'react'
import {Text} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'
const TextRN=({text})=>{
    return(
        <Text style={styles.textStyle}>
            {text}
        </Text>
    )
}
const styles=ScaledSheet.create({
    textStyle:{
        paddingVertical:'5@vs',
        lineHeight:'20@vs',
        textAlign:'justify',
        fontFamily:"Raleway",

    }
})
export default TextRN