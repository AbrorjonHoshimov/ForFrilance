import {configureStore} from "@reduxjs/toolkit";
import loginStore from "./loginStore";

export default configureStore({
    reducer:{
        loginStore
    }
})