import React from 'react'
import {View} from 'react-native'
import {Container,Header,TextInputLabel,TextInput,Question} from '../../components'
import globalStyle from '../../utils/globalStyle'
import TextContent from '../../utils/TextContent'
const Question1=({navigation})=>{
    const onPressYes=()=>{
        navigation.replace("Summary")
    }
    const onPressNo=()=>{
        navigation.replace("Summary")
    } 
    const onPressHeaderLeft=()=>{
        navigation.replace("Question4a")
    }
    return(
        <Question 
            headerTitle="Question 4B"
            question={TextContent.Question4b}
            onPressHeaderLeft={onPressHeaderLeft}
            onPressNo={onPressNo}
            onPressYes={onPressYes}
        />
    )
}
export default Question1