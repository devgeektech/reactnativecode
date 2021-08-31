import React from 'react'
import 'react-native-gesture-handler'
import {} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {
    Seat,
    Setting,
    Sortie,
    StartSurvey,
    Summary,
    Tail,
    Warning,
    Main,
    LoadingScreen,
    Question
} from '../screens'
import {
    Question1,
    Question2a,
    Question2b,
    Question3a,
    Question3b,
    Question4a,
    Question4b
} from '../screens/Questions'
import {Login} from '../screens/authentication'
import {Dashboard,Environment,Mission,Person,Submit,ViewList} from '../screens/preFlight'
const Stack=createNativeStackNavigator()
const route=()=>{
    const Screen=()=>(
        <Stack.Navigator  screenOptions={{headerShown:false}} initialRouteName={"LoadingScreen"}>
            <Stack.Screen name="LoadingScreen" component={LoadingScreen}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Main" component={Main}/>
            <Stack.Screen name="Warning" component={Warning}/>
            <Stack.Screen name="Seat" component={Seat}/>
            <Stack.Screen name="Setting" component={Setting}/>
            <Stack.Screen name="Sortie" component={Sortie}/>
            <Stack.Screen name="Start" component={StartSurvey}/>
            <Stack.Screen name="Summary" component={Summary}/>
            <Stack.Screen name="Tail" component={Tail}/>
            <Stack.Screen name="Question1" component={Question1}/>
            <Stack.Screen name="Question2a" component={Question2a}/>
            <Stack.Screen name="Question2b" component={Question2b}/>
            <Stack.Screen name="Question3a" component={Question3a}/>
            <Stack.Screen name="Question3b" component={Question3b}/>
            <Stack.Screen name="Question4a" component={Question4a}/>
            <Stack.Screen name="Question4b" component={Question4b}/>
            <Stack.Screen name="Question" component={Question}/>

                {/*  */}
            {/* Pre flight */}
                {/*  */}
            <Stack.Screen name="ViewList" component={ViewList}/>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Mission" component={Mission} />
            <Stack.Screen name="Environment" component={Environment} />
            <Stack.Screen name="Person" component={Person} />
            <Stack.Screen name="Submit" component={Submit} />
            
        </Stack.Navigator>
    )
    return(
        <NavigationContainer>
            <Screen />
        </NavigationContainer>
    )
}
export default route