import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// export interface CounterState {
//   value: number;
// }
export interface CounterState {
  value: Boolean;
}

const initialState: CounterState = {
  value: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
    change:(state,action:PayloadAction<Boolean>)=>{
        state.value=!action.payload;
    }
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const {change}=counterSlice.actions;

export default counterSlice.reducer;
