import { ADD_Cart, DEL_Cart } from "./../Action/action";

const initialState = {
  cartItems: [],
  cartTotal: 0,
  totalPrice: 0,
};

export const CartReducer = (state = initialState, action) => {
  console.log("cartItems", state.cartItems);
  const item = action.payload;
  switch (action.type) {
    case ADD_Cart:
      const alreadyPresent = state.cartItems.find(
        (CartItem) => CartItem.id === item.id
      );
      if (alreadyPresent) {
        return state;
      } else {
        localStorage.setItem(
          "cartItems",
          JSON.stringify([...state.cartItems, item])
        );
        const Price = state.totalPrice + item.price;
        localStorage.setItem("totalPrice", Price);
        return {
          ...state,
          cartItems: [...state.cartItems, { ...item }],
          cartTotal: state.cartTotal + 1,
          totalPrice: Price,
        };
      }
      case DEL_Cart:
        
        const data = action.payload;
        console.log("val",action.payload);
       
        const left = state.cartItems.filter(item => item.id !== data.id);
        console.log("vvv",state.cartItems)
        const LeftPrice = state.totalPrice - data.price;
        localStorage.setItem("cartItems", JSON.stringify(left));
        localStorage.setItem("totalPrice", LeftPrice);
        return {
          ...state,
          cartItems: left,
          cartTotal: state.cartTotal - 1,
          totalPrice: LeftPrice
        };
      
    default:
      return {
        ...state,
        cartItems: localStorage.getItem("cartItems")
          ? JSON.parse(localStorage.getItem("cartItems"))
          : [],
        totalPrice: localStorage.getItem("totalPrice")
          ? localStorage.getItem("totalPrice")
          : 0,
      };
  }
};
