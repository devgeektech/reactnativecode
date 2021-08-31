import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'
const TextInputLabel=({text="text",requried=false})=>{
    return(
        <View style={styles.textLableContainer}>
            <Text style={styles.textStyle}>
                {text}
            </Text>
            {requried&&
            <Text style={styles.requriedStyle}>*</Text>
            }
            </View>
        
    )
}
const styles=ScaledSheet.create({
    textStyle:{
        fontSize:20,
        paddingVertical:'10@vs',
        fontFamily:"Raleway",
        fontWeight:"500"
    },
    textLableContainer:{
        flexDirection:"row"
    },
    requriedStyle:{
        color:"red",
        alignSelf:"center",
        marginLeft:5,
        marginBottom:15
    }
})
export default TextInputLabel