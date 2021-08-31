import React from 'react';
import {View,SafeAreaView} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'
const ContainerWithouScroll=({children})=>{
    return(
        <SafeAreaView >
            <View style={styles.viewContainer}>
                {children}
            </View>
        </SafeAreaView>
    )
}
const styles=ScaledSheet.create({
    viewContainer:{
        paddingHorizontal:'10@mvs',
        paddingTop:'20@ms',
        flex:1,
        paddingVertical:'100@vs',
    }
})
export default ContainerWithouScroll 