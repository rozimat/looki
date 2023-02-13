import { createSlice} from "@reduxjs/toolkit";



const initialState={
  cartItems: [],
  quantity: 0,
  total: 0,
}

const cartSlice = createSlice({
  name : 'cart',
  initialState,
  reducers:{

    addToCart(state, action){
      state.quantity +=1;
      state.cartItems.push(action.payload);
      state.total = state.total+ parseInt(action.payload.price)
      
     /*const itemIndex= state.cartItems.findIndex( 
      item=> item.id === action.payload.id);
      if(itemIndex >= 0){
        state.cartItems[itemIndex].quantity +=1
      }
      else{
        const tempProduct = { ...action.payload, quantity: 1};
        state.cartItems.push(tempProduct);
      }*/
            
    },
    removeCart(state, action){
      state.total = state.total - parseInt(action.payload.price); // togri ishlavotti
      state.cartItems.indexOf(action.payload); //togri ishlavotti
      state.cartItems.splice(action.payload, 1); //togri ishlavotti
    }

  }
})


export default cartSlice;





