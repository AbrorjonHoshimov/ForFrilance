import React, {useRef, useState} from 'react';
import axios from "axios";
import {API_PATH} from "../Constants/constants";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {connect} from "react-redux";
const ConfirmPage = ({userId}) => {
    const ref=useRef(null);
    const history=useNavigate();
   const [first,setfirst]=useState([])
   const [second,setSecond]=useState([])
   const [third,setThird]=useState([])
   const [four,setfour]=useState([])
   const [five,setfive]=useState([])
   const [six,setSix]=useState([])
   const [data,setdata]=useState([])


    const inputSecond = useRef(null);
    const inputThird = useRef(null);
    const inputFourth = useRef(null);
    const inputFifth = useRef(null);
    const inputSixth = useRef(null);


    function changeInput(state, key, inputRef,last) {
       if (key >= 0 && key <= 9) {
           state(key)
       }

       if (key === "Backspace") {
           state("")
       }

        inputRef.current.focus()
        if (last==true){
            setdata({
                userId:userId,
                confirmationCode:first+second+third+"-"+four+five+six
            })
            axios.post(API_PATH+'signup/confirm',data).then((res)=>{
                console.log(res.data)
                history('/anketa')
            }).catch((error=>{
                toast.error("Error!");
            }))
        }

    }

    // 134 userId
    return (
        <div className={'wrapper'}>
            <div className={'confirmInputDiv'}>
                <div className={'fs-5'}>Введите код подтверждения</div>
                <div className={'fs-5 fw-bold'}>Мы отправили письмо на username</div>
             <div className={'d-flex align-items-center justify-content-between mt-3'}>
                <input
                    value={first}
                    type="number"
                    className={'confirmInput'}
                    onChange={() => {}}
                    onKeyUp={({key}) => changeInput(setfirst, key, inputSecond,false)}
                        />
                <input
                    ref={inputSecond}
                    type="number"
                    className={'confirmInput'}
                    onChange={() => {}}
                    onKeyUp={({key}) => changeInput(setSecond, key, inputThird,false)}
                />
                <input
                    ref={inputThird}
                    type="number"
                    className={'confirmInput'}
                    onChange={() => {}}
                    onKeyUp={({key}) => changeInput(setThird, key, inputFourth,false)}
                />
                <div className={'confirmInput d-flex align-items-center justify-content-center border'}>-</div>

                <input
                    ref={inputFourth} type="text" id={'four'}
                    className={'confirmInput'}
                    onChange={() => {}}
                    onKeyUp={({key}) => changeInput(setfour, key, inputFifth,false)}/>
                <input ref={inputFifth} type="text" id={'five'}
                       className={'confirmInput'}
                       onChange={() => {}}
                       onKeyUp={({key}) => changeInput(setfive, key, inputSixth,false)}/>
                <input ref={inputSixth} type="text" id={"six"}
                       className={'confirmInput'}
                       onChange={() => {}}
                       onKeyUp={({key}) => changeInput(setSix, key, inputSixth,true)}/>
             </div>
            </div>
        </div>
    );
};
const mapStateToProps=(state)=>({
    userId:state.loginStore.id,
})
export default connect(mapStateToProps)(ConfirmPage);