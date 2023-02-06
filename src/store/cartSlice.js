import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    //state is basically initialState

    //In redux we can return new state or mutate the value
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {


        //u cant directly update the state like
        // state = state.filter((item) => item.id !== action.payload);

        //so just return the new state

      return state.filter((item) => item.id !== action.payload);
    },
  },
});

//to fetch this data we have to export
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
