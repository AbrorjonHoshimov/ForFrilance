import React, {useState} from 'react';
import "../css/AllCss.css"
import axios from "axios";
import {API_PATH} from "../Constants/constants";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {connect} from "react-redux";
import {getId} from "../store/loginStore";

const LoginPage = ({id,getId}) => {
    const history = useNavigate()
    const [data, setdata] = useState([])
    const [username, setUsername] = useState([])
    const [password, setPassword] = useState([])
    const [mailing,setMailing]=useState(false)

    const save = () => {
setdata({
    username:username,
    password:password,
    mailing:mailing
})
        getId(data)
        // axios.post(API_PATH+'signup',data).then((res)=>{
        //     console.log(res.data);
        //
        //     history('/confirm')
        // }).catch((error=>{
        //     toast.error("Error!");
        // }))
    }
    console.log(id);
    return (
        <div className={'wrapper'}>
            <div className={'loginBox'}>
                <div className={'d-flex align-items-center justify-content-between'}>
                    <p className={'fw-bold'}>Регистрация</p>
                    <p className={'fw-bold'}>Войти</p>
                </div>
                <div>
                    <input type="text" className={'forInput'} placeholder={'E-mail'}
                           onChange={event => setUsername(event.target.value)}/>
                </div>
                <div>
                    <input type="text" className={'forInput'} placeholder={'Пароль'}
                           onChange={event => setPassword(event.target.value)}/>
                </div>
                <div>
                    <input type="text" className={'forInput'} placeholder={'Повторите пароль'}/>
                </div>
                <div className={'forInput d-flex align-items-center justify-content-center'}
                     style={{background: '#4378FF'}} onClick={()=> save()}>
                    Регистрация
                </div>
                <div className={'d-flex gap-3 mt-2'}>
                    <input type="checkbox" className={'mt-3'} onChange={event => setMailing(event.target.checked)}/>
                    <p style={{fontSize: '16px'}}>Соглашаюсь на получение рассылки по электронной почте</p>
                </div>
                <div className={'d-flex gap-3 mt-2'}>
                    <input type="checkbox" className={'mt-3'}/>
                    <p style={{fontSize: '16px'}}>Соглашаюсь с <span className={'text-primary'}>политикой обработки персональных данных </span>
                    </p>
                </div>
            </div>

        </div>
    );
};
const mapStateToProps=(state)=>({
    id:state.loginStore.id,
})
const mapDispatchToProps ={getId}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);