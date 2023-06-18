import {createSlice} from '@reduxjs/toolkit';

const initialState={
    value:0,
    email:'akash@gmail.com'
}

export const counterSlice = createSlice({
     name:'counter',
     initialState,
     reducers:{
        increment:(state)=>{
            state.value +=1;
        },
        decrement:(state)=>{
            state.value -=1;
        },
        amount:(state,action)=>{
            state.value = action.payload;
        }
     }
})

export const {increment,decrement,amount} = counterSlice.actions;

export default counterSlice.reducer;