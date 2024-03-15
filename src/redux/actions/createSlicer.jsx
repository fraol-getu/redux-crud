 import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 import axios from "axios";
import { useParams } from "react-router-dom"

export const handleSubmit  = createAsyncThunk("handleSubmit", async (values) => {
    const response = await axios.post('http://localhost:3030/users', values)
return response.data
  
}) 

const createrSlice = createSlice({
    name: "create",
    initialState : {

        value : {name:'', email:''},
    },

 })

 export default createrSlice.reducer

          







// export const handleSubmit = createAsyncThunk(
//     "handleSubmit",
//     async (values) => {
//       try {
//         const response = await axios.post(
//           "https://json-wiov.onrender.com/users/",
//           values // Pass form values to the server
//         );
  
//         // Handle successful response (replace with your desired logic)
//         return response.data; // Assuming the response contains data
  
//       } catch (err) {
//         console.error("Error posting data:", err);
//         // Handle errors appropriately (e.g., display an error message to the user)
//         throw err; // Re-throw the error to signal failure
//       }
//     }
//   );
//   const createrSlice = createSlice({
//     name: "create",
//     initialState: {
//       value: {}, // Set an empty object for initial state
//       loading: false, // Add a loading state property (optional)
//       error: null,    // Add an error state property (optional)
//     },
//     reducers: {
//       setCreate: (state, action) => {
//         state.value = action.payload; // Update the value property
//       },
//     },
    
//   });  
//   export const {setCreate} = createrSlice.actions
// export default createrSlice.reducer