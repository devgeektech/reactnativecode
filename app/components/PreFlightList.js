import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Theme from '../utils/Theme'
const PreFlightList = ({ title = "08/08/2021", subHeading = "3rd " }) => {
    return (
        <View style={styles.preFlightListContainer}>
            <View style={styles.topTextContainer}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headingText}>{title}</Text>
                </View>
                <View style={styles.subHeadingCotainer}>
                    <Text>{subHeading}</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity>
                    <View style={styles.bottomDetailContainer}>
                        <Text style={styles.bottomTextStyle}>Details</Text>
                        <MaterialIcons
                            name="arrow-forward-ios"
                            size={15}
                            color='#fff'
                        // style={styles.showLeadCardForwardIconStyle}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = ScaledSheet.create({
    preFlightListContainer: {
        backgroundColor: Theme.white,
        borderRadius: "10@vs",
        minHeight: "100@vs",
        paddingTop: "5@vs",
        justifyContent: "space-between",
    },
    topTextContainer: {
        paddingHorizontal: "10@s",
        // padding
    },
    headingText: {
        fontSize: 25,
        fontFamily: "Raleway"
    },
    headingContainer: {
        marginVertical: "5@vs"
    },
    subHeadingCotainer: {
        marginVertical: "5@vs"
    },
    bottomContainer: {
        backgroundColor: Theme.appColor,
        borderBottomEndRadius: "10@vs",
        borderBottomStartRadius: "10@vs",
        paddingVertical: "3@vs",
        paddingHorizontal: "10@s",
        justifyContent: "flex-end",
        
    },
    bottomDetailContainer:{
        flexDirection: "row",
        alignSelf:"flex-end"
    },
    bottomTextStyle:{
        fontFamily: "Raleway",
        color: Theme.white

    }
})
export default PreFlightList