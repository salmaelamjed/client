import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import { TLoading } from "@customTypes/shared";
import { TCategory } from "@customTypes/category";
interface ICategoriesState {
  records: TCategory[];
  loading: TLoading;
  error: string | null;
}

const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      console.log("actGetCategories.pending");
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      console.log("actGetCategories.fulfilled:", action.payload);
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetCategories.rejected, (state, action) => {
      console.log("actGetCategories.rejected:", action.payload);
      state.loading = "failed";
      state.error = typeof action.payload === "string" ? action.payload : "Unknown error";
    });
  },
});


export { actGetCategories };
export default categoriesSlice.reducer;