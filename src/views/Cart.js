import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { product } from '../data/Product'
import { deleteAll } from '../actions'
import { bottom } from '@popperjs/core'

function Cart() {
    const [fashion, setFashion] = useState(product.filter(x => x.category == "Fashion"))
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    return (
        <div id="CartArea" className="card mr-2">
            <div className="card-body">
                <h5 className="card-title">My Cart</h5>

                <div className="row">
                    <div className="col-md-6">Item Name</div>
                    <div className="col-md-3">Amount</div>
                    <div className="col-md-3">Action</div>
                </div>
                {
                    cart.length > 0 ?

                        cart.map((x, i) => (
                            <div className="row mb-2"key={i}>
                            <div className="col-md-6">{x.name}</div>
                            <div className="col-md-3">{x.amount}</div>
                            <div className="col-md-3"><button className="btn btn-sm btn-primary" onClick={(e) => { dispatch(deleteAll(x.product_id, x.name)) }}>Delete</button></div>
                        </div>
                    ))
                    : ""
                }
            </div>
        </div>
    )
}

export default Cart
