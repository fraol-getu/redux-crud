
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from "react-router-dom";

export const handleUpdate = createAsyncThunk(
  "handleUpdate",
  async ({inputData, id}) => {
    // Access ID from the extra argument passed from the component
     
    try {
      const update = await axios.put('http://localhost:3030/users/' + id, inputData);
      console.log(update.data, "i'fffff")
      return update.data;
    } catch (error) {
      console.error('Error updating user data:', error);
      throw error; // Re-throw error to be caught by extraReducers
    }
  }
);

const updateSlice = createSlice({
  name: "update",
  initialState: {
    value: {
      name: "",
      email: "",
    }, // Initial data object (optional)
    loading: false, // Optional loading state
    error: null, // Optional error state
  },
  reducers: {
  }, // No additional reducers in this example
  extraReducers: (builder) => {
    builder
      .addCase(handleUpdate.pending, (state) => {
        state.loading = true; // Set loading state to true on update start
      })
      .addCase(handleUpdate.fulfilled, (state, action) => {
        state.loading = false; // Reset loading state on success
        // Update state or handle success (e.g., clear form, show success message)
      })
      .addCase(handleUpdate.rejected, (state, action) => {
        state.loading = false; // Reset loading state on error
        state.error = action.error.message; // Set error state with error message
      });
  },
});

export default updateSlice.reducer;