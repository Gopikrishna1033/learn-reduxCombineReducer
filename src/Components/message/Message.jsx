import React from 'react'
import{useDispatch, useSelector} from "react-redux"
import { geAction,gmAction } from '../../redux/messages/message.action'
function Message() {

    let dispatch = useDispatch()
    let Message = useSelector((state)=>{
        return state.message
    })

    let gmHandler = ()=>{
        dispatch(gmAction())
    }

    let geHandler = ()=>{
        dispatch(geAction())
    }

  return (
    <div>
        {/* <pre>{JSON.stringify(Message)}</pre> */}
        <h3>Value:::{Message.msg}</h3>
        <button onClick={gmHandler}>GM</button>
        <button onClick={geHandler}>GE</button>
    </div>
  )
}

export default Message