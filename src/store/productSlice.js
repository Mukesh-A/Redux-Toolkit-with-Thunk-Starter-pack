import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//storing API call directly to store

//freeze means u cant change the value like const
export const STATUS = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      //DO NOT DO THIS

      // const res = await fetch("https://fakestoreapi.com/products/");
      //do not call the api directly here

      //so use THUNKS
      // thunk is middleware, see below  code
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// THUNK

// normal thunk
export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    //getstate is used for at any state we need to know the state in which it is u can use that
    //const prop = getState()

    //we r setting the status
    dispatch(setStatus(STATUS.LOADING));

    try {
      const res = await fetch("https://fakestoreapi.com/products/");
      const data = await res.json();

      //from above store
      dispatch(setProducts(data));
      //back to idle
      dispatch(setStatus(STATUS.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
}

//THUNK redefined form instead of above normal method

// export const fetchProducts = createAsyncThunk("products/fetch", async () => {
//   const res = await fetch("https://fakestoreapi.com/products/");
//   const data = await res.json();
//   return data;

  //no dispatch

  /// extra code wt we have to use is in reducers is remove all that method inside it and add
//   reducers: {
//     extraReucers: (builder) => {
//       builder
//         .addCase(fetchProducts.pending, (state, action) => {
//           state.status = STATUS.LOADING;
//         })
//         .addCase(fetchProducts.fullfilled, (state, action) => {
//           state.data = action.payload;
//           state.status = STATUS.IDLE;
//         })
//         .addCase(fetchProducts.rejecteds, (state, action) => {
//           state.status = STATUS.ERROR;
//         });
//     };
//   }
// });
