//Action types
let INCR = "INCR"
let DECR = "DECR"

//Action methods
let inAction=()=>{
    return{type:INCR}
}
let deAction=()=>{
    return{type:DECR}
}
export {inAction,deAction,INCR,DECR}