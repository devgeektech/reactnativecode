import React from 'react'
import {View,StyleSheet} from 'react-native'
import {Switch} from 'native-base'
import {TextInputLabel} from '../components'
import Theme from '../utils/Theme'
const SwitchRN=({text})=>{
    return(
        <View style={styles.switchContainer}>
            <TextInputLabel text={text}/>
            <Switch 
                onTrackColor={Theme.appColor}
            />
            
        </View>
    )
}
const styles=StyleSheet.create({
    switchContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})
export default SwitchRN