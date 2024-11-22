import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByCatPrefix from "./actGetProductsByCatPrefix";
import { TLoading } from "@customTypes/shared";
import { TProduct } from "@customTypes/product";
interface ICategoriesState {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsCleanUp:(state)=>{
        state.records=[]
    }
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByCatPrefix.pending, (state) => {
      console.log("actGetProductsByCatPrefix.pending");
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByCatPrefix.fulfilled, (state, action) => {
      console.log("actGetProductsByCatPrefix.fulfilled:", action.payload);
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetProductsByCatPrefix.rejected, (state, action) => {
      console.log("actGetProductsByCatPrefix.rejected:", action.payload);
      state.loading = "failed";
      state.error = typeof action.payload === "string" ? action.payload : "Unknown error";
    });
  },
});

export const {productsCleanUp}=productsSlice.actions
export { actGetProductsByCatPrefix };
export default productsSlice.reducer;