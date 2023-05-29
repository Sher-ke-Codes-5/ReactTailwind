import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    inputValue: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemInCart(state, action) {
        console.log("its called");
      const items = action.payload;
      const alreadyPresent = state.cartItems.find(
        (cartItems) => cartItems.id === items.id
      );
      if (alreadyPresent) {
        return state;
      } else {
        state.cartItems.push(items);
        const newPrice=state.totalPrice+items.totalPrice;
        state.totalPrice = newPrice;
        console.log(state.totalPrice);
      }
    },
    removeItemInCart(state, action) {
        console.log('del call');
      const items = action.payload;
      console.log("id",action.payload.id);
     const newCart=state.cartItems.filter((item)=>item.id!==items.id);
   
      const PriceRenew = newCart.reduce(
        (total, items) => total + items.price * items.inputValue,
        0
      );
      state.cartItems=newCart;
      state.totalPrice=PriceRenew;
    },
    updateItemInCart(state, action) {
      const items = action.payload;
   
      const updatedProduct = state.cartItems.map((item) => {
        if (item.id === items.id) {
          return {
            ...item,
            inputValue: items.inputValue,
          };
        }
        return item;
      });
      const updatedPrice = updatedProduct.reduce(
        (total, items) => total + items.price * items.inputValue,
        0
      );
      state.cartItems = updatedProduct;
      state.totalPrice = updatedPrice;
    },
    delALL(state,action){
        state.cartItems=[]
        state.totalPrice=0

    }
  },
  

});
export default CartSlice.reducer;
export const {addItemInCart,delALL,removeItemInCart,updateItemInCart}=CartSlice.actions;