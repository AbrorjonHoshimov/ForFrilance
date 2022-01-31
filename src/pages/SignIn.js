import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_PATH, TOKEN_NAME, tokenHeader} from "../Constants/constants";
import {useNavigate} from "react-router-dom";

const SignIn = () => {
  const history=useNavigate()
    const [userName, setUsername] = useState([])
    const [password, setPassword] = useState([])
    const [data, setData] = useState([])


    function pushPage(key,last){
        if (key==='Enter'&&last===true){
            setData({
                username:userName,
                password:password
            })
            axios.post(API_PATH+'signin',data).then((res)=>{
                console.log(res.data)
                localStorage.setItem(TOKEN_NAME,'Bearer '+res.data.token)
                console.log(tokenHeader)
                history('/mainPage')

            })
        }
    }

    return (
        <div className={'wrapper'}>
            <div>
                <div className={'singinPageCard'}>
                    <div>
                        <input type="text" className={'singinPageInput'} placeholder={"Username"}
                               onChange={event => setUsername(event.target.value)}
                               onKeyUp={({key})=>pushPage(key,false) }/>

                    </div>
                    <div>
                        <input type="text" className={'singinPageInput'} placeholder={"password"}
                               onChange={event => setPassword(event.target.value)}
                               onKeyUp={({key})=>pushPage(key,true) }/>
                    </div>
                </div>
                {/*<button className={'btn btn-success mt-5'} onClick={() => save()}>save</button>*/}
            </div>

        </div>
    );
};

export default SignIn;