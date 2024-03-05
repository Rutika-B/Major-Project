import { createSlice, combineReducers } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface ToggleState {
  value: Boolean;
}
const initialState: ToggleState = {
  value: false,
};

export interface dateRangeState {
  fromDate: string;
  toDate: string;
}
const initialRange: dateRangeState = {
  fromDate: "26-08-2021",
  toDate: "01-09-2021",
};

export const ToggleSlice = createSlice({
  name: "ToggleSide",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<Boolean>) => {
      state.value = !action.payload;
    },
  },
});
export const rangeSlice = createSlice({
  name: "dateRange",
  initialState: initialRange,
  reducers: {
    selectedRange: (
      state,
      action: PayloadAction<{ fromDate: string; toDate: string }>
      ) => {
        state.fromDate = action.payload.fromDate;
        state.toDate = action.payload.toDate;
        console.log(state.fromDate);
        console.log(state.toDate);
      },
  },
});
export const { change } = ToggleSlice.actions;
export const { selectedRange } = rangeSlice.actions;
const rootReducer = combineReducers({
  toggleSide: ToggleSlice.reducer,
  dateRange: rangeSlice.reducer,
});
export default rootReducer;
