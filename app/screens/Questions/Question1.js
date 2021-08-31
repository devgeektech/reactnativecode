import React from 'react'
import {View} from 'react-native'
import {Container,Header,TextInputLabel,TextInput,Question} from '../../components'
import globalStyle from '../../utils/globalStyle'
import TextContent from '../../utils/TextContent'
const Question1=({navigation})=>{
    const onPressYes=()=>{
        navigation.replace("Question2a")
    }
    const onPressNo=()=>{
        navigation.replace("Question2a")
    }
    const onPressHeaderLeft=()=>{
        navigation.replace("Sortie")
    }
    return(
        <Question 
            headerTitle="Question 1"
            onPressHeaderLeft={onPressHeaderLeft}
            question={TextContent.Question1}
            onPressNo={onPressNo}
            onPressYes={onPressYes}
        />
    )
}
export default Question1