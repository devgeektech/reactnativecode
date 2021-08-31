import React from 'react'
import {View} from 'react-native'
import {Container,Header,TextInputLabel,TextInput,Question} from '../../components'
import globalStyle from '../../utils/globalStyle'
import TextContent from '../../utils/TextContent'
const Question3b=({navigation})=>{
    const onPressYes=()=>{
        navigation.replace("Question4a")
    }
    const onPressNo=()=>{
        navigation.replace("Question4a")
    }
    const onPressHeaderLeft=()=>{
        navigation.replace("Question3a")
    }
    return(
        <Question 
            headerTitle="Question 3B"
            question={TextContent.Question3b}
            onPressHeaderLeft={onPressHeaderLeft}
            onPressNo={onPressNo}
            onPressYes={onPressYes}
        />
    )
}
export default Question3b