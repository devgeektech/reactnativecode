import React from 'react'
import {View} from 'react-native'
import {Container,Header,TextInputLabel,TextInput,Question} from '../../components'
import globalStyle from '../../utils/globalStyle'
import TextContent from '../../utils/TextContent'
const Question3a=({navigation})=>{
    const onPressYes=()=>{
        navigation.replace("Question3b")
    }
    const onPressNo=()=>{
        navigation.replace("Question3b")
    }
    const onPressHeaderLeft=()=>{
        navigation.replace("Question2b")
    }
    return(
        <Question 
            headerTitle="Question 3A"
            question={TextContent.Question3a}
            onPressHeaderLeft={onPressHeaderLeft}
            onPressNo={onPressNo}
            onPressYes={onPressYes}
        />
    )
}
export default Question3a