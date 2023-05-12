import { ADD_Cart, DEL_Cart } from "./../Action/action";

const initialState = {
  cartItems: [],
  cartTotal: 0,
  totalPrice: 0,
  inputValue:0,
};

export const CartReducer = (state = initialState, action) => {
  let RealAddedInput=0;
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
        RealAddedInput=item.inputValue;
        console.log(item.inputValue);
        let Quantity = item.inputValue * Price;
        localStorage.setItem("totalPrice", Quantity);

        return {
          ...state,
          cartItems: [...state.cartItems, { ...item }],
          cartTotal: state.cartTotal + 1,
          inputValue:RealAddedInput,
          totalPrice: Quantity,
        };
      }
    case DEL_Cart:
      const data = action.payload;
      const itemTotal = action.payload.price * action.payload.inputValue;
      const newVar = state.totalPrice - itemTotal;
      const left = state.cartItems.filter(
        (item) => item.id !== data.id || action.payload.inputValue === RealAddedInput
      );

      console.log("vvv", item);
      localStorage.setItem("cartItems", JSON.stringify(left));
      localStorage.setItem("totalPrice", newVar);
      return {
        ...state,
        cartItems: left,
        inputValue:action.payload.inputValue,
        cartTotal: state.cartTotal - 1,
        totalPrice: newVar,
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
