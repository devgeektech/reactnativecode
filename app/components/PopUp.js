import React from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { Overlay } from 'react-native-elements'
import Theme from '../utils/Theme'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
// import { TouchableOpacity } from 'react-native-gesture-handler'
const PopUp = ({ showPopUp = false, title = "", onPressClose, type = "success" }) => {
    const deviceHeight = Dimensions.get("window").height
    const deviceWidth = Dimensions.get("window").width
    return (
        <Overlay overlayStyle={{ borderRadius: 20, backgroundColor: "white" }} isVisible={showPopUp} >
            <View style={{ backgroundColor: "#fff", width: deviceWidth / 1.25, minHeight: deviceHeight / 5 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingLeft: 30 }}>
                    <View style={{ alignItems: "flex-end", flex: 1 }}>
                        <View style={{
                            backgroundColor: type == "success" ?  Theme.appColor: "red",
                            // flex:1,
                            width: 120,
                            alignSelf: "center",
                            borderRadius: 100,
                            height: 120,
                            marginTop: -80,
                            alignItems: 'center',
                            justifyContent: "center"
                            // position:"absolute",
                            // bottom:500

                        }}>
                            <FontAwesome name={type == "success" ? "check" : 'close'} size={60} color="white" />

                        </View>
                    </View>
                    <TouchableOpacity onPress={onPressClose}>
                        <View style={{ justifyContent: "flex-start", alignItems: "center", paddingRight: 5 }}>
                            <AntDesign name="close" size={20} />
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{ 
                    alignItems: "center",
                     justifyContent: "center",
                      }}>
                    <Text style={{ fontSize: 30, textAlign:'center', width: 250, color: Theme.appColor }}>{title}</Text>
                </View>
            </View>

        </Overlay>
    )
}
export default React.memo(PopUp)