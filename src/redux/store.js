import { configureStore } from "@reduxjs/toolkit";
import userReducer from './actions/userSlicer'
import createReducer from './actions/createSlicer'
 import updateReducer from './actions/updateSlicer'
const store = configureStore({
    reducer : {
     user: userReducer,
     create: createReducer,
     update: updateReducer
    }
})
export default store