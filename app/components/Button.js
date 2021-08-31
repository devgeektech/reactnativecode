import React from 'react'
import {TouchableOpacity,StyleSheet,View,Text} from 'react-native'
import Theme from '../utils/Theme'
import {scale,moderateScale,moderateVerticalScale,verticalScale,ScaledSheet} from 'react-native-size-matters'
const Button=({title="Button",onPress,otherStyleContainer={},otherStyleButtonText={},})=>{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.buttonContainer,otherStyleContainer]}>
                <Text style={[styles.buttonTextStyle,otherStyleButtonText]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles=ScaledSheet.create({
    buttonContainer: {
        width:'100%',
        backgroundColor:Theme.appColor,
        height:'50@mvs',
        // height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'10@ms',
        shadowOffset:{
            height:1,
            width:1
        },
        // elevation:0.5,
        marginVertical:'40@ms',
        
    },
    buttonTextStyle:{
        color:Theme.white,
        fontSize:"20@ms",
        fontFamily:"Raleway",
        // backgroundColor:"red"
    }
})
export default Button