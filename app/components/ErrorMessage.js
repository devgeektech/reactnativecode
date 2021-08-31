import React from 'react'
import {Text} from 'react-native'
import * as Animatable from 'react-native-animatable';
const ErrorMessage=({errorMessage=""})=>{
    return (
        errorMessage? <Animatable.Text duration={2500} animation="bounce"
        >
            <Text style={{color:"red"}}>{errorMessage}</Text>
        </Animatable.Text>
    :null
    )
}
export default 
// React.memo(
    ErrorMessage
    // )