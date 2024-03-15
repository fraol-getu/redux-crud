import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchData = createAsyncThunk("fetchData", async () => {
const data = await axios.get('http://localhost:3030/users/')
 return data.data
})
const userSlice = createSlice({
    name: "user",
    initialState : {
        isloading: false,
        data: [],
        error: false,
    
    },
    extraReducers: (builder) => {

    builder.addCase(fetchData.pending, (state, action) => {

        state.isloading = true
    })
    builder.addCase(fetchData.fulfilled, (state, action) => {
     state.isloading = false
     state.data = action.payload

    })
    builder.addCase(fetchData.rejected, (state, action) => {
     state.error = true

    })
    
    
    }



})
export const { setData } = userSlice.actions
export default userSlice.reducer