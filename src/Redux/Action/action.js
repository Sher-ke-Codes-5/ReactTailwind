export const ADD_Cart='ADD_Cart'
export const DEL_Cart='DEL_Cart'
export const addToTheCart=(products)=>({
    type:ADD_Cart,
    payload:products,
    
});
export const deleteFromCart=(products)=>({
type:DEL_Cart,
payload:products,
})