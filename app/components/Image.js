import React from 'react'
import {Image,View,StyleSheet} from 'react-native'
import {A10} from '../constants/constImages'
import {ScaledSheet} from 'react-native-size-matters'
const ImageRN=({uri})=>{
    return(
        <View style={styles.imageContainer}>
            <Image source={uri||A10} />
        </View>

    )
}
const styles=ScaledSheet.create({
    imageContainer:{
        alignItems:'center',
        marginBottom:'50@mvs'
        
    }
})
export default ImageRN