import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { inAction,deAction } from '../../redux/products/product.action'
function Product() {

    let dispatch = useDispatch()
    let product = useSelector((state)=>{
        return state.product
    })
    let inHandler = ()=>{
        dispatch(inAction())
    }

    let deHandler = ()=>{
        dispatch(deAction())
    }

  return (
    <div>
        <div className="container">
            <div className="row">
                <table className='table table-bordered'>
                    <thead className='bg-primary text-white'>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Qty</th>
                        <th>Price</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.name}</td>
                            <td><img src={product.image} alt="iphone 15 pro max" width={80}/></td>
                            <td><i className='fa fa-circle-minus' onClick={deHandler}></i>{product.qty} <i className='fa fa-circle-plus' onClick={inHandler}></i></td>
                            <td>{(product.price*product.qty).toLocaleString("en-IN")}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        {/* <pre>{JSON.stringify(product)}</pre>
        <button onClick={deHandler}>-</button>{product.qty}
        <button onClick={inHandler}>+</button> */}
    </div>
  )
}

export default Product