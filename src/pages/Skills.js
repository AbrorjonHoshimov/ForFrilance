import React, {useEffect, useState} from 'react';
import axios from "axios";
import {tokenHeader} from "../Constants/constants";
import {useNavigate} from "react-router-dom";

const Skills = () => {
    const history=useNavigate()

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://test.it-planet.org/user/skill?name=е", tokenHeader).then((res) => {
            setData(res.data.skills)
        })
    })
    function deleteFunction(id){
        axios.delete(' https://test.it-planet.org/user/skill/'+id,tokenHeader).then((res)=>{
            console.log(res.data)
        })

    }
    return (
        <div className={'skillsPageWrapper'}>
            <div className={'forHeaderPersonalPage'}>
                <div className={'d-flex gap-2 '} onClick={()=>history('/mainPage')}>
                    <div>
                        <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M7.3282 1.1718C7.71873 1.56232 7.71873 2.19549 7.3282 2.58601L2.41421 7.5L7.3282 12.414C7.71872 12.8045 7.71873 13.4377 7.3282 13.8282C6.93768 14.2187 6.30451 14.2187 5.91399 13.8282L0.292893 8.20711C-0.0976312 7.81658 -0.0976308 7.18342 0.292893 6.79289L5.91399 1.1718C6.30451 0.781275 6.93768 0.781275 7.3282 1.1718Z"
                                  fill="#847E95"/>
                        </svg>
                    </div>
                    <div className={'headerPageforPTag'}>
                        Закрыть
                    </div>
                </div>
                <div style={{fontSize: '16px', color: '#0047FF', fontWeight: '700px'}}>Навыки</div>
            </div>
            <p className={'fw-bold mt-3'} style={{fontSize:'22px'}}>Навыки</p>
            <div className={'d-flex gap-2'}>
            {data.map(((value, index) => {
                return  <button onClick={()=>deleteFunction(value.id)} className={'p-1 fw-bold'} style={{background: "none", borderRadius: '5px', fontSize: '14px'}}>{value.name}
                    <svg className={'mx-3'} width="9" height="9" viewBox="0 0 9 9" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.24264 5.2071L7.77817 8.74264L8.48528 8.03553L4.94975 4.5L8.48528 0.964462L7.77817 0.257355L4.24264 3.79289L0.707107 0.257355L0 0.964462L3.53553 4.5L0 8.03553L0.707107 8.74264L4.24264 5.2071Z"
                            fill="black"/>
                    </svg>
                </button>
            }))}
            </div>
            <div>
                <select name="" id="" className={'anketaPageInput'}>
                    {data.map(((value, index) => {
                        return <option value={value.id}>{value.name}</option>
                    }))}
                </select>
            </div>
            <button className={'personalPageForButton'}>Добавить</button>
        </div>
    );
};

export default Skills;