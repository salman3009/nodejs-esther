import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  value: 0,
  email:"akash@gmail.com",
  todos:{},
  status:'not started'
}

export const fetchDetails = createAsyncThunk('counter/fetchDetails',async()=>{
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  return response.data;
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += action.payload.value;
      state.email = action.payload.email;
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchDetails.pending,(state)=>{
      state.status = 'pending';
    }).addCase(fetchDetails.fulfilled,(state,action)=>{
      state.status = 'success';
      state.todos = action.payload; 
    }).addCase(fetchDetails.rejected,(state)=>{
      state.status = 'rejected';
    })
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer