export const ADD_Cart='ADD_Cart'
export const DEL_Cart='DEL_Cart'
export const UPDATE_PRODUCT='UPDATE_PRODUCT'
export const DEL_ALL='DEL_ALL'
export const addToTheCart=(products)=>({
    type:ADD_Cart,
    payload:products,
    
});
export const deleteFromCart=(products)=>({
type:DEL_Cart,
payload:products,
})
export const updateProduct=(updateProduct)=>({
type:UPDATE_PRODUCT,
payload:updateProduct,
})
export const clearCart=(products)=>({
type:DEL_ALL,
payload:products,
})