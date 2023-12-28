import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import foodService from "../../services/foodService";
import { toast } from "react-toastify";

const initialState = {
  foods: [],
  loading: false,
  food: null,
  error: "",
  message: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchFood = createAsyncThunk(
  "food/fetchFood",
  async (thunkAPI) => {
    try {
      return await foodService.getFoods();
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addFood = createAsyncThunk(
  "food/addFood",
  async (foodData, thunkAPI) => {
    try {
      return await foodService.addFood(foodData);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const editFood = createAsyncThunk(
  "food/editFood",
  async ({ foodId, food }, thunkAPI) => {
    try {
      await foodService.editFood(foodId, food);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteFood = createAsyncThunk(
  "food/deleteFood",
  async (foodId, thunkAPI) => {
    try {
      await foodService.deleteFood(foodId);
      return foodId;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const foodSlice = createSlice({
  name: "food",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFood.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFood.fulfilled, (state, action) => {
      state.loading = false;
      state.foods = action.payload;
      state.error = "";
    });
    builder.addCase(fetchFood.rejected, (state, action) => {
      state.loading = false;
      state.foods = [];
      state.error = action.error.message;
    });


    builder.addCase(addFood.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addFood.fulfilled, (state, action) => {
      state.loading = false;
      state.foods.push(action.payload);
      toast.success("A new food is added !", {
        position: "bottom-left",
      });
      state.error = "";
    });
    builder.addCase(addFood.rejected, (state, action) => {
      state.loading = false;
      state.foods = [];
      state.message = action.payload;
      state.error = action.error.message;
    });


    builder.addCase(editFood.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(editFood.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.product = action.payload;
      window.location.reload();
      toast.info("Food updated from cart", {
        position: "bottom-left",
      });
    });
    builder.addCase(editFood.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });

    builder.addCase(deleteFood.pending, (state, action) => {
        state.loading = true;
      });
  
      builder.addCase(deleteFood.fulfilled, (state, action) => {
        state.loading = false;
        // Filter out the deleted product from the state
        state.foods = state.foods.filter(
          (product) => product.id !== action.payload
        );
        toast.error("Food removed from cart", {
            position: "bottom-left",
          });
        window.location.reload();
        state.error = "";
      });
  
      builder.addCase(deleteFood.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default foodSlice.reducer;
