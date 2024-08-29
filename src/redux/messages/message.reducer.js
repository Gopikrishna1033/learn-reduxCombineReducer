import {GM,GE} from "./message.action"

let intialstate = {
    msg:"Hello"
}
let messageReducer = (state=intialstate,action)=>{
    switch (action.type) {
        case 'GM':
            return{msg:"GoodMorning"}
        case 'GE':
            return{msg:"GoodEvening"}
        default:
            return state
    }
}
export {messageReducer}