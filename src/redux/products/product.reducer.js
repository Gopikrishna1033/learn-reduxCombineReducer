import {INCR,DECR} from "./product.action"

let intialstate = {
    name:"Iphone 15 pro max",
    image:"https://tse3.mm.bing.net/th?id=OIP.3v2QHbiOg56ckVkQ4vb9AQHaE_&pid=Api&P=0&h=180",
    qty:1,
    price:193000
}

let productReducer = (state=intialstate,action)=>{
    switch (action.type) {
        case "INCR":
            return{...state,qty:state.qty+1}
        case "DECR":
            return{...state,qty:state.qty-1}  
        default:
            return state
    }
}
export {productReducer}