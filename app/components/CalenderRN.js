import React, { useState } from 'react'
import DateTimePicker from 'react-native-modal-datetime-picker'
import Button from '../components/Button'
const CalenderRN = ({ isVisible, onPressOk, onPressCancel, mode = "date" }) => {

    const onConfirm = (date) => {
        console.log("onConfirm")
        if (mode == "date") {
            const fullYear = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
            onPressOk(fullYear)
        }
        else {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            onPressOk(strTime)
        }
    }
    return (
        <DateTimePicker 
            isVisible={isVisible}
            display='spinner'
            onConfirm={onConfirm}
            onCancel={onPressCancel}
            mode={mode}
            is24Hour={false}
        />
        // <Button onPress={onConfirm} />
    )
}
export default CalenderRN