import { productActionsTypes } from "../constants/product-action-type"

const initialState = {
    productList:[
    //     {
    //     id:111,
    //     title:"laptop",
    //     price:1499,
    //     description:"great product at cheap price",
    //     category:"electronics"
    // }
]
}

 export const productReducer = (state = initialState, action)=>{
    switch (action.type){
        case productActionsTypes.ALL_PRODUCTS:
            return {...state, productList:action.payload};
            default:
                return state;
    }
 }
 export const selectedProductReducer = (state = {}, {type,payload})=>{
    switch (type){
        case productActionsTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        case productActionsTypes.REMOVE_PRODUCT:
            return {};
            default:
                return state;
    }
 }