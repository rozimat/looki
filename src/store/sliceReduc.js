import { createSlice} from "@reduxjs/toolkit";



const initialState={
  cartItems: [],
  quantity: 0,
  caetTotalAmount: 0,
}

const cartSlice = createSlice({
  name : 'cart',
  initialState,
  reducers:{

    addToCart(state, action){
      const itemIndex= state.cartItems.findIndex( 
      item=> item.id === action.payload.id);
      if(itemIndex >= 0){
        state.cartItems[itemIndex].quantity +=1
      }
      else{
        const tempProduct = { ...action.payload, quantity: 1};
        state.cartItems.push(tempProduct);
      }
    },
    removeCart(state, action){
      const indexOfId = state.cartItems.indexOf(action.payload.id);
      state.cartItems.splice(indexOfId, 1);
      alert(indexOfId)
    }

  }
})


export default cartSlice;





