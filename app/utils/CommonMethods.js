import AsyncStorage from '@react-native-community/async-storage'

export const getQuestionIndex=(qId,array)=>{
    let questionIndex=-1
    array.map((item,index)=>{
        if(item.qId==qId)
        questionIndex=index
    })
    return questionIndex
}
export const radioMap = (list, item) => {
    const updatedList = list.map((listItem) => {
        if (item.key == listItem.key) {
            return { ...listItem, isSelected: true }
        }
        else {
            return { ...listItem, isSelected: false }
        }
    })
    return updatedList
}

export const getUserDetailId=async()=>{
    const userData=  JSON.parse(await AsyncStorage.getItem("userData"))
    // debugger
    return userData.UserDetailID
}

export const checkBoxMap=(list,sum,item)=>{
    let screenData=[...list] 
    screenData.forEach(obj=>{ 
        obj.child.forEach(checkBox=>{
            if(checkBox.PreFlightItemDetailID==item.PreFlightItemDetailID){
                if(item.IsSelected==1)
                     sum=parseInt(sum)-parseInt(item.ItemValue)
                else
                    sum=parseInt(sum)+parseInt(item.ItemValue)
                checkBox.IsSelected=checkBox.IsSelected==1?0:1
            }
        }
        )
    }
    )
    return {sum,screenData}
}
export const checkBoxMapForApi=(list)=>{
    // debugger
    let selectedCheckBox=[]
    list.map((checkBoxList)=>{
        checkBoxList.child.map((checkBox)=>{
            if(checkBox.IsSelected==1)
            selectedCheckBox.push({PreFlightItemDetailID:checkBox.PreFlightItemDetailID})
        })
    })
    // debugger
    return selectedCheckBox
}
export const saveLoginInfo=async(info)=>{
    
    let jsonInfo=JSON.stringify(info)
    let data
    await AsyncStorage.setItem("userData",jsonInfo).then(()=>{
        data=true
    }).catch((err)=>{
        alert(err)
    })
}
export const logOut=async()=>{
    await AsyncStorage.removeItem("userData").then(()=>{
        return ""
    }).catch((error)=>{
        console.log(error)
    })
}

export const setDefaultDate=()=>{
    let date=new Date()
    const fullYear = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    return fullYear
}
    // await AsyncStorage.getItem("userData").then((data)=>{
    //     console.log(data)
    // })
