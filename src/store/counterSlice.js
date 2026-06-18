import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "./authSlice";


const initState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.value += action.payload;
    },
    decrease: (state, action) => {
      state.value -= action.payload;
    },
  },
  extraReducers: (builder)=>{
    builder.addCase(logOut, (state,actiom)=>{
      state.value = 0;
    })
  }
});
export default counterSlice.reducer;
export const { increase, decrease } = counterSlice.actions;