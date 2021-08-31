import React from 'react'
import {View} from 'react-native'
import {Container,Header,TextInputLabel,TextInput,Question} from '../../components'
import globalStyle from '../../utils/globalStyle'
import TextContent from '../../utils/TextContent'
const Question2a=({navigation})=>{
    const onPressYes=()=>{
        navigation.replace("Question2b")
    }
    const onPressNo=()=>{
        navigation.replace("Question2b")
    }
    const onPressHeaderLeft=()=>{
        navigation.replace("Question1")
    }
    return(
        <Question 
            headerTitle="Question 2A"
            question={TextContent.Question2a}
            onPressHeaderLeft={onPressHeaderLeft}
            onPressNo={onPressNo}
            onPressYes={onPressYes}
        />
    )
}
export default Question2a