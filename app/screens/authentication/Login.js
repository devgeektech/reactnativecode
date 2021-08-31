import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert,
    SafeAreaView,
} from 'react-native';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import SimpleReactValidator from 'simple-react-validator'
import Theme from '../../utils/Theme'
import { Radio } from 'native-base'
import { login } from '../../redux/actions/auth_actions'
import { useDispatch, useSelector } from 'react-redux'
import {
    ErrorMessage, 
    Loader,
    PopUp
} from '../../components'
const Login = ({ navigation }) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const [, forceUpdate] = useState()
    const [isEmail, setIsEmail] = useState(false)
    const [isLoading,setIsLoading]= useState(false)
    const validator = useRef(new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } }))
    const [showPopUp,setShowPopUp] =useState(false)
    const [popUpText,setPopUpText] = useState("")
    const [popUpType,setPopUpType] = useState("success")
    // this.validator = new SimpleReactValidator({autoForceUpdate: this})





    const updateSecureTextEntry = async () => {
        setSecureTextEntry(!secureTextEntry)
    }

    const onError = (err) => {
        debugger
        console.log(err)
    }
    const userLogin = () => {
        // debugger
        if (validator.current.allValid()) {
            setIsLoading(true)
            let params = {
                "LoginType": isEmail ? "Email ID" : "SPYDR ID",
                "UserID": email,
                "PIN": password
            }

            dispatch(
                login(
                    {
                        params,
                        successCallback: onSuccessLogin,
                        failedCallback: onFailedLogin
                    }
                )
            )
        }
        else {
            validator.current.showMessages()
            forceUpdate(1)
        }
    }

    const onSuccessLogin = (message = 'Successfully logged in') => {
        setTimeout(() => {
            setIsLoading(false)
            navigation.replace('Main')
        }, 1)
    }
    const onFailedLogin = (message = 'Failed to login') => {
        debugger
        setTimeout(()=>{
            setIsLoading(false)
            setShowPopUp(true)
            setPopUpText(message)
            setPopUpType("failed")
            // alert(message)
        },10)
        
    }

    //Login database function end

    //Forgot Password Navigation Function Start

    const forgotPasswordNavigation = () => {
        // this.props.navigation.reset({
        //     index: 0,
        //     routes: [{ name: 'ForgotPassword' }],
        //   });
    }

    //Forgot Password Navigation Function End

    const onPressPopUpClose=()=>{
        setShowPopUp(false)
        setPopUpText("")
   }
    validator.current.purgeFields();
    return (
        
        
        <View style={{ flex: 1 }}>
            {isLoading?<Loader />:
            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} >

                <View style={styles.container}>

                    <StatusBar backgroundColor={Theme.appColor} barStyle="light-content" />
                    <View style={styles.header}>

                        <Text style={styles.text_header}>Welcome!</Text>
                    </View>

                    {/* <FlashMessage position="top" />  */}

                    <Animatable.View
                        animation="fadeInUpBig"
                        style={[styles.footer, {
                            backgroundColor: '#fff'
                        }]}
                    >
                        <View >
                            <Radio.Group
                                defaultValue="2"
                                name="myRadioGroup"
                                onChange={() => setIsEmail(!isEmail)}

                                value={isEmail}
                            >
                                <View style={styles.radioButtonContainer}>
                                    
                                    <Radio aria-label="SDfs" value={false} my={1} style={{ paddingRight: 5 }}>
                                        Login using SPYDR ID
                                    </Radio>
                                    <Radio aria-label="SDfs" value={true} my={1} >
                                        Login Using Email
                                    </Radio>
                                </View>
                            </Radio.Group>
                            <Text style={[styles.text_footer, {
                                color: 'black'
                            }]}>
                                {isEmail ? "Email ID" : "Spydr ID"}
                            </Text>
                            <View style={styles.action}>
                                <FontAwesome
                                    name="user-o"
                                    color='black'
                                    size={20}
                                />
                                <TextInput
                                    value={email}
                                    placeholder={isEmail ? "Email ID" : "Spydr ID"}
                                    autoCompleteType="off"
                                    keyboardType="email-address"
                                    placeholderTextColor="#666666"
                                    style={[styles.textInput, {
                                        color: 'black'
                                    }]}
                                    autoCapitalize="none"
                                    onChangeText={(val) => setEmail(val)}
                                    // onBlur={validator.current.showMessageFor("Email Id")}
                                // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                                />
                            </View>

                            {isEmail&&<ErrorMessage 
                                errorMessage={validator.current.message('Email Id', 
                                    email, 'required|email')} />}
                            {!isEmail&&<ErrorMessage 
                                errorMessage={validator.current.message('Spyder Id', 
                                email, 'required')} 
                            />}
                            <Text style={[styles.text_footer, {
                                color: 'black',
                                marginTop: 35
                            }]}>Password</Text>
                            <View style={styles.action}>
                                <Feather
                                    name="lock"
                                    color='black'
                                    size={20}
                                />
                                <TextInput
                                    value={password}
                                    placeholder="Password"
                                    placeholderTextColor="#666666"
                                    secureTextEntry={secureTextEntry}
                                    style={[styles.textInput, {
                                        color: 'black'
                                    }]}
                                    autoCapitalize="none"
                                    onChangeText={(val) => setPassword(val)}
                                />
                                <TouchableOpacity
                                    onPress={updateSecureTextEntry}
                                >
                                    {secureTextEntry ?
                                        <Feather
                                            name="eye-off"
                                            color="grey"
                                            size={20}
                                        />
                                        :
                                        <Feather
                                            name="eye"
                                            color="grey"
                                            size={20}
                                        />
                                    }
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.validatorMessage}>{validator.current.message('Password',
                                password, 'required')}</Text>
                            <TouchableOpacity onPress={() => forgotPasswordNavigation()}>
                                {/* <Text style={{ color: '#208bdc', marginTop: 15 }}>Forgot password?</Text> */}
                                {/* '#009387' */}
                            </TouchableOpacity>
                            <View style={styles.button}>
                                <TouchableOpacity
                                    style={styles.signIn}
                                    onPress={userLogin}
                                >

                                    <LinearGradient
                                        colors={[Theme.appColor, Theme.appColor]}
                                        // ['#08d4c4', '#01ab9d']
                                        style={styles.signIn}
                                    >
                                        <Text style={[styles.textSign, {
                                            color: '#fff'
                                        }]}>Sign In</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </Animatable.View>

                </View>
        
            </KeyboardAwareScrollView>
                }
                <PopUp
                showPopUp={showPopUp}
                onPressClose={onPressPopUpClose}
                title={popUpText}
                type={popUpType}
            />
        </View>
                                    

    );
}
// const mapDispatchToProps = (dispatch) => ({
//     login:(payload) => dispatch(login(payload))
// })
// const mapStateToProps = (state) => {
//     return state
//   }
export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.appColor,
        justifyContent: 'space-around',
        //'#009387'
    },
    radioButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%',
        marginBottom: 40
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    validatorMessage: {
        color: 'red',
    }
});