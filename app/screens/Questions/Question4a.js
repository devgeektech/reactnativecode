import React from 'react'
import {View} from 'react-native'
import {Container,Header,TextInputLabel,TextInput,Question} from '../../components'
import globalStyle from '../../utils/globalStyle'
import TextContent from '../../utils/TextContent'
const Question4a=({navigation})=>{
    const onPressYes=()=>{
        navigation.replace("Question4b")
    }
    const onPressNo=()=>{
        navigation.replace("Question4b")
    } 
    const onPressHeaderLeft=()=>{
        navigation.replace("Question3b")
    }
    return(
        <Question 
            headerTitle="Question 4A"
            question={TextContent.Question4a}
            onPressHeaderLeft={onPressHeaderLeft}
            onPressNo={onPressNo}
            onPressYes={onPressYes}
        />
    )
}
export default Question4a