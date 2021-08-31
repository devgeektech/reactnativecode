import React from 'react'
import { View,StyleSheet } from 'react-native'
import { Header, Button, Heading, Container } from './index'
import Theme from '../utils/Theme'
import {ScaledSheet} from 'react-native-size-matters'
const Question = ({ 
    headerTitle = "Question",
    question="question", 
    onPressYes,
    onPressNo,
    onPressHeaderLeft
}) => {
    return (
        <View style={styles.questionContainer}>
            <Header title={headerTitle} onPressHeaderLeft={onPressHeaderLeft}/>
            <Container>
                <Heading 
                    text={question}
                    fSize={28}
                    headingStyle={styles.headingStyle}
                />
                <View style={styles.questionBtnContainer}>
                    <Button title="Yes" otherStyleContainer={styles.otherStyleContainer} onPress={onPressYes} />
                    <Button title="No" otherStyleContainer={styles.otherStyleContainer} onPress={onPressNo}/>
                </View>
            </Container>
        </View>
    )
}
const styles=ScaledSheet.create({
    questionContainer:{
        flex: 1 
    },
    questionBtnContainer:{
        marginTop:'50@vs'
    },
    otherStyleContainer:{
        marginVertical:15
    },
    headingStyle:{
        color:Theme.appColor,
        
    }
})
export default Question