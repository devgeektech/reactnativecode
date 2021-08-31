import React from 'react'
import {View,ScrollView} from 'react-native'
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view'
import {ScaledSheet} from 'react-native-size-matters'
const Container=({children})=>{
    return(
        <KeyboardAwareScrollView contentContainerStyle={styles.keyBoardAvoidContainer}  nestedScrollEnabled={true} >
        <View style={styles.viewContainer}>
            {children}
        </View>
        </KeyboardAwareScrollView>
    )
}
const styles=ScaledSheet.create({
    keyBoardAvoidContainer:{
        flexGrow:1
    },
    viewContainer:{
        paddingHorizontal:'10@mvs',
        paddingTop:'20@ms',
        flex:1,
        backgroundColor:"#fff",
        paddingVertical:'100@vs',
    }
})
export default Container 