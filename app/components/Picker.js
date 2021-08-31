import React from 'react'
import { StyleSheet } from 'react-native'
import { Select } from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../utils/Theme'
import { ScaledSheet } from 'react-native-size-matters'
const PickerRN = ({ pickerData, selectedValue, onValueChange, placeholder }) => {
  console.log(selectedValue)
  return (
    <Select
    
      placeholder={placeholder}
      selectedValue={selectedValue}
      onValueChange={(value)=>{
        console.log(value)
        pickerData.map((singleItem)=>{
          if(singleItem.value==value){
            console.log("found")
            console.log(singleItem)
            onValueChange(singleItem)
          }
        })
      }
      }
      dropdownIcon={
        <MaterialCommunityIcons
          name="chevron-down"
          size={24}
          color={Theme.appColor}
          style={styles.dropDownIconStyle}
        />
      }
    >
      {pickerData.map((item) => {
        return <Select.Item label={item.label} value={item.value} key={item.value}  />
      })}
    </Select>
  )
}
const styles = ScaledSheet.create({
  dropDownIconStyle: {
    paddingRight: '10@ms'
  }
})
export default PickerRN