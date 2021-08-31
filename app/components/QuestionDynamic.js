import React from 'react'
import { View,StyleSheet,FlatList } from 'react-native'
import { Header, Button, Heading, Container } from './index'
import Theme from '../utils/Theme'
import {ScaledSheet} from 'react-native-size-matters'
const Question = ({ 
    data,
    headerTitle = "Question",
    onPressOptionButton,
    navigation,
    // question="question", 
    // onPressYes,
    // onPressNo,
    onPressHeaderLeft
}) => {
    const renderItem=({item})=>{
        console.log(item)
        return <Button title={item.text} otherStyleContainer={styles.otherStyleContainer} onPress={()=>onPressOptionButton(item)} />

    }
    // console.log(data.option[0].previousQIdOnClick)
    return (
        <View style={styles.questionContainer}>
            <Container>
                <Heading 
                    text={data?.question}
                    fSize={28}
                    headingStyle={styles.headingStyle}
                />
                <FlatList 
                    data={data?.option}
                    renderItem={renderItem}
                />
                {/* <View style={styles.questionBtnContainer}>
                    <Button title="Yes" otherStyleContainer={styles.otherStyleContainer} onPress={onPressYes} />
                    <Button title="No" otherStyleContainer={styles.otherStyleContainer} onPress={onPressNo}/>
                </View> */}
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