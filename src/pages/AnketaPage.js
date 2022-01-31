import React, {useState} from 'react';
import axios from "axios";
import {API_PATH} from "../Constants/constants";
import {useNavigate} from "react-router-dom";

const AnketaPage = () => {
    const history=useNavigate();
    const [firstname,setFirstName]=useState([])
    const [lastname,setlastName]=useState([])
    const [data,setData]=useState([])



    function pushPage(key,last){
        if (key==='Enter'&&last===true){
            setData({
                userId: 134,
                username:firstname,
                password:lastname,
                login:"somelogin",
                confirmationCode: "997-890"
            })
            axios.post(API_PATH+'signup/activate/personal',data).then((res)=>{
                console.log(res.data)
                history('/signin')

            })
        }
    }
    return (
        <div className={'wrapper'}>
            <div>
            <div className={'anketaCard'}>
                <div>
                <input  type="text" className={'anketaPageInput'} placeholder={"FirstName"}
                        onChange={event => setFirstName(event.target.value)}
                        onKeyUp={({key})=>pushPage(key,false) }/>
                </div>
                <div>
                <input type="text"
                       className={'anketaPageInput'}
                       placeholder={"LastName"}
                       onChange={event => setlastName(event.target.value)}
                       onKeyUp={({key})=>pushPage(key,true) }/>
                </div>
            </div>
                {/*<button className={'btn btn-success mt-5'} onClick={()=>save()}>save</button>*/}
            </div>

        </div>
    );
};

export default AnketaPage;