import React from 'react'
import {View,ActivityIndicator,StyleSheet} from 'react-native'
import Theme from '../utils/Theme'
const Loader=()=>{
    return(
        <View style={styles.ActivityIndicatorContainer}>
            <ActivityIndicator size="large" color={Theme.appColor}/>
        </View>
    )
}
const styles=StyleSheet.create({
    ActivityIndicatorContainer: {
        flex:1,
        alignItems:'center',
        justifyContent:"center",
        
    }
})

export default Loader