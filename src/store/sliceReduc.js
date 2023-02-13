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
      
      if (state.cartItems.find((item)=> item === action.payload)){
        state.quantity +=1;
        state.total = state.total+ parseInt(action.payload.price)
      }
      else{
        state.quantity +=1;
        state.cartItems.push(action.payload);
        state.total = state.total+ parseInt(action.payload.price)
      }
     /*const itemIndex= state.cartItems.findIndex( 
      item=> item.id === action.payload.id);
      if(itemIndex >= 0){
        state.cartItems[itemIndex].quantity +=1
        state.total = state.total+ parseInt(action.payload.price)
      }
      else{
        const tempProduct = { ...action.payload, quantity: 1};
        state.cartItems.push(tempProduct);
        state.total = state.total+ parseInt(action.payload.price)
      }*/
            
    },
    removeCart(state, action){
      state.total = state.total - parseInt(action.payload.price); // togri ishlavotti
      state.cartItems.indexOf(action.payload); //togri ishlavotti
      state.cartItems.splice(action.payload, 1); //togri ishlavotti
      state.quantity -=1;

    }

  }
})


export default cartSlice;





