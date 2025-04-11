import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type Input = {
  input: string;
};

const initialState: Input = {
  input: "",
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
  },
});

export const { setInputValue } = inputSlice.actions;
export default inputSlice.reducer;
