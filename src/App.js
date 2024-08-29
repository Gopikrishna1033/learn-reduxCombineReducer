import React from 'react'
import {Provider} from "react-redux"
import { store } from './redux/Store'
import Message from './Components/message/Message'
import Product from './Components/Products/Product'
function App() {
  return (
    <div>
        <Provider store = {store}>
            <h2>App component</h2>
            <hr/>
            <Message/>
            <hr/>
            <Product/>
        </Provider>
        
    </div>
  )
}

export default App