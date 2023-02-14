import { createSlice} from "@reduxjs/toolkit";
const initialState={
  cartItems: [],
  totalQuantity: 0,
  total: 0,
}
const cartSlice = createSlice({
  name : 'cart',
  initialState,
  reducers:{
    addToCart(state, action){
        state.total = state.total + parseInt(action.payload.price); 
        state.totalQuantity +=1;
        state.cartItems.push(action.payload);
    },
    removeCart(state, action){
      state.total = state.total - parseInt(action.payload.price); 
      state.cartItems.indexOf(action.payload); 
      state.cartItems.splice(action.payload, 1); 
      state.totalQuantity -=1;
    },
    removeAll:(state)=>{
      state.cartItems = [];
      state.total=0 ;
      state.totalQuantity= 0;
    }
  }
})
export default cartSlice;