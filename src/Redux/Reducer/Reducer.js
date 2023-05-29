// import {
//   ADD_Cart,
//   DEL_ALL,
//   DEL_Cart,
//   UPDATE_PRODUCT,
// } from "./../Action/action";
// const initialState = {
//   cartItems: [],
//   cartTotal: 0,
//   inputValue: 0,  
//   totalPrice: 0,
// };
// export const CartReducer = (state = initialState, action) => {
//   let RealAddedInput = 0;
//   console.log("cartItems", state.cartItems);

//   switch (action.type) {
//     case ADD_Cart:
//       const item = action.payload;
//       const alreadyPresent = state.cartItems.find(
//         (CartItem) => CartItem.id === item.id
//       );
//       if (alreadyPresent) {
//         return state;
//       } else {
//         //const newCartItems=[...state.cartItems,action.payload];
//         const newTotalPrice = state.totalPrice + item.totalPrice;
//         //const itemTotal = item.price + state.totalPrice;
//         RealAddedInput = action.payload.inputValue;
//         console.log(item.inputValue);
//         // const newItem = { ...item };
//         localStorage.setItem(
//           "cartItems",
//           JSON.stringify([...state.cartItems, item])
//         );
//         localStorage.setItem("totalPriceItems", newTotalPrice);

//         return {
//           ...state,
//           cartItems: [...state.cartItems, item],
//           cartTotal: state.cartTotal + 1,
//           inputValue: RealAddedInput,
//           totalPrice: newTotalPrice, // Update the totalPrice in the state
//         };
//       }
//     case UPDATE_PRODUCT:
//       const updatedCartItems = state.cartItems.map((item) => {
//         if (item.id === action.payload.id) {
//           return {
//             ...item,
//             inputValue: action.payload.inputValue,
//           };
//         }
//         return item;
//       });
//       const updatedTotalPrice = updatedCartItems.reduce(
//         (total, item) => total + item.price * item.inputValue,
//         0
//       );
//       localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
//       localStorage.setItem("totalPriceItems", updatedTotalPrice);

//       return {
//         ...state,
//         cartItems: updatedCartItems,
//         totalPrice: updatedTotalPrice,
//       };
//     case DEL_Cart:
//       const filterCart = state.cartItems.filter(
//         (item) => item.id !== action.payload.id
//       );
//       const totalPriced = filterCart.reduce(
//         (total, item) => total + item.price * item.inputValue,
//         0
//       );
//       localStorage.setItem("cartItems", JSON.stringify(filterCart));
//       localStorage.setItem("totalPriceItems", totalPriced);

//       return {
//         ...state,
//         cartItems: filterCart,
//         inputValue: action.payload.inputValue,
//         cartTotal: state.cartTotal - 1,
//         totalPrice: totalPriced,
//       };
//     case DEL_ALL:
//       localStorage.setItem("cartItems", []);
//       localStorage.setItem("totalPriceItems", 0);
//       return {
//         ...state,
//         cartItems: [],
//       };
//     default:
//       return {
//         ...state,
//         cartItems: localStorage.getItem("cartItems")
//           ? JSON.parse(localStorage.getItem("cartItems"))
//           : [],
//         totalPrice: localStorage.getItem("totalPrice")
//           ? localStorage.getItem("totalPrice")
//           : 0,
//         inputValue: localStorage.getItem("inputValue")
//           ? localStorage.getItem("inputValue")
//           : 0,
//       };
//   }
// };
