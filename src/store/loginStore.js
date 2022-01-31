import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {API_PATH} from "../Constants/constants";
import {toast} from "react-toastify";

const loginSlice = createSlice({
    name:'login',
    initialState:{
        id:null
    },
    reducers:{
        getId:((state, action) => {
            state.id=action.payload
        })
    }
})

export function getId(data){
    return function (dispatch){
        axios.post(API_PATH+'signup',data).then((res)=>{
            dispatch({
                type:'login/getid',
                payload:res.data
            })
        }).catch((error=>{
            toast.error("Error!");
        }))
    }

}



export default loginSlice.reducer
