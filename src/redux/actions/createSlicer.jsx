import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const navigate = useNavigate()

export const handleSubmit  = createAsyncThunk("handleSubmit", async (event) => {
    const navigate = useNavigate()
    event.preventDefault()
     await axios.post("https://my-json-server.typicode.com/fraol-getu/demo/users", {name:'', email:''})
 .then(res => {
    alert("data posted sucessfully")
        navigate('/')
        }
        )
        .catch(err => console.log(err))
          

})

const createrSlice = createSlice({
    name: "create",
    initialState : {

        value : {name:'', email:''},
    },
    reducers: {
        setCreate: (state, action) => {
            state.value = action.payload
        }
    }
})
export const {setCreate} = createSlice.actions
export default createrSlice.reducer