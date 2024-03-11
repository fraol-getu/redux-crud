import { configureStore } from "@reduxjs/toolkit";
import userReducer from './actions/userSlicer'
import createReducer from './actions/createSlicer'
const store = configureStore({
    reducer : {
     user: userReducer,
     create: createReducer
    }
})
export default store