import { actionCart } from "./actionTypes"

export const addToCart = (id,name) =>{
    return {
        type:actionCart.add,
        data: {
            id,name
        }
    }
}
export const deleteFromCart = (id,name) =>{
    return {
        type:actionCart.delete,
        data: {
            id,name
        }
    }
}
export const deleteAll = (id, name) => {
    return {
        type: actionCart.deleteAll,
        data: {
            id, name
        }
    }
}