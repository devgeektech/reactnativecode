import Network from '../../resources/Network'
import { EndPoint } from '../../resources/EndPoints'

const defaultGetCall = async (path, params) => {

    try {
        await Network.get(path, params).then(response => {
            // debugger
            data = response
        })
    }
    catch (err) {
        console.log(err)
        data = err
    }
    return data

}
const defaultPostService = async (path, params) => {
    let data
    // debugger
    try {
        await Network.post(path, params).then(response => {
            data = response

        })
    }
    catch (err) {
        console.log(err)
        data = err
    }
    return data
}



export { defaultGetCall, defaultPostService }