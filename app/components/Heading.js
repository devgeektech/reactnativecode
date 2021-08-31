import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'
const Heading = ({ text = "Heading",fSize=20,headingStyle ={},textAlign="left"}) => {
    return (
        <Text style={[styles.textStyle,headingStyle,{ fontSize: fSize,textAlign:textAlign}]}>
            {text}
        </Text>
    )
    }
const styles = ScaledSheet.create({
    textStyle:{
            paddingBottom: '20@mvs',
            fontFamily:"Raleway",
            fontWeight: "bold",

        }
})
export default Heading