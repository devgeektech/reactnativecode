import React from 'react'
import {View} from 'react-native'
import {Container,Header,TextInputLabel,TextInput,Question} from '../../components'
import globalStyle from '../../utils/globalStyle'
import TextContent from '../../utils/TextContent'
const Question2b=({navigation})=>{
    const onPressYes=()=>{
        navigation.replace("Question3a")
    }
    const onPressNo=()=>{
        navigation.replace("Question3a")
    }
    const onPressHeaderLeft=()=>{
        navigation.replace("Question2a")
    }
    return(
        <Question 
            headerTitle="Question 2B"
            question={TextContent.Question2b}
            onPressHeaderLeft={onPressHeaderLeft}
            onPressNo={onPressNo}
            onPressYes={onPressYes}
        />
    )
}
export default Question2b