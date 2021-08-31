import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Header } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Theme from '../utils/Theme'
import { ScaledSheet } from 'react-native-size-matters'
import { logOut } from '../utils/CommonMethods'
const SLHeader = ({
    title,
    icon = "arrow-back",
    isLeftIcon = true,
    rightIcon,
    onPressRightIcon,
    onPressHeaderLeft,
    rightIconName ,
    navigation
}) => {
    const onPressLogout = async () => {
        await logOut()
        navigation.replace("LoadingScreen")
    }
    console.log(onPressHeaderLeft)
    return (
        <View style={styles.container}>
            <Header
                statusBarProps={{ backgroundColor: Theme.appColor }}
                containerStyle={styles.headerContainerStyle}
                leftComponent={
                    isLeftIcon &&
                    <TouchableOpacity onPress={()=>onPressHeaderLeft()}>
                        <MaterialIcons name={icon} size={24}
                            style={styles.leftIconStyle} />
                    </TouchableOpacity>
                }
                centerComponent={{
                    text: title,
                    style: styles.centerComponentStyle
                }}
                rightComponent={
                    <View style={styles.rightContainer}>
                        <TouchableOpacity onPress={onPressLogout}>
                            <View style={styles.rightIconStyle}>
                                <Ionicons name={"power-outline"} size={24} color={Theme.white} />
                            </View>
                        </TouchableOpacity>
                        {rightIconName&&
                        <TouchableOpacity onPress={onPressRightIcon}>
                            <View style={styles.rightIconStyle}>
                                <Ionicons name={rightIconName} size={24} color={Theme.white} />
                            </View>
                        </TouchableOpacity>
                        }
                    </View>
                }
            />
        </View>
    )
}
const styles = ScaledSheet.create({
    headerContainerStyle: {
        height: '95@mvs',
        backgroundColor: Theme.appColor,
    },
    leftIconStyle: {
        color: '#fff'
    },
    centerComponentStyle: {
        color: '#fff',
        fontSize: 18,
        fontFamily: "Raleway",
        fontWeight: "bold"
    },
    rightIconStyle: {
        paddingRight: 15
    },
    rightContainer:{
        flexDirection:"row",
        // backgroundColor:"red"
    }

})
export default SLHeader;