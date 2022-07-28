import { productActionsTypes } from "../constants/product-action-type";

export const allProducts = (products) => {
    return {
        type: productActionsTypes.ALL_PRODUCTS,
        payload: products
    };
};
export const selectedProduct = (product) => {
    return {
        type: productActionsTypes.SELECTED_PRODUCT,
        payload: product
    };
};
export const removeProduct = () => {
    return {
        type: productActionsTypes.REMOVE_PRODUCT
    };
};