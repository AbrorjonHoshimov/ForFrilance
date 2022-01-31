import React, {useEffect, useState} from 'react';
import axios from "axios";
import {tokenHeader} from "../Constants/constants";
import {useNavigate} from "react-router-dom";

const PersonalPage = () => {
    const history=useNavigate()
    const [country,setCountry]=useState([])
    const [region,setRegion]=useState([])
    const [city,setCity]=useState([])
    const [firstName,setFirsName]=useState([]);
    const [lastName,setLastName]=useState([]);
    const [parentName,setParentName]=useState([]);
    const [sexId,setSex]=useState([])
    const [birth,setBirth]=useState([])
    const [status,setStatus]=useState([])
    const [countyId,setCountryId]=useState([])
    const [regionId,setRegionId]=useState([])
    const [cityId,setCityId]=useState([])
    const [currentCountry,setCurrentCountry]=useState({})
    const [currentRegion,setCurrentRegion]=useState({})
    const [currentcity,setCurrentCity]=useState({})
    function getCity(){
        axios.post("https://test.it-planet.org/location/city",{
            "name": "Воро",
            "languageCode": "RU",
            "countryId": "Q159",
            "regionCode": "VOR"
        },tokenHeader).then((res)=>{
            setCity(res.data.data)
        })
    }

    function getCountry(){
        axios.post("https://test.it-planet.org/location/country",{
            name:"Ру",
            languageCode:"Ru"},tokenHeader).then((res)=>{
                setCountry(res.data.data)
        })
    }
    function getRegion(){
        axios.post("https://test.it-planet.org/location/region",{
            name: "во",
            languageCode: "RU",
            countryId: "Q159"
        },tokenHeader).then((res)=>{
            setRegion(res.data.data)
            console.log(res.data)
        })
    }

    useEffect(()=>{
       getCountry();
       getRegion();
       getCity();
    },[])
    const sex = [{
        id: 0,
        name: 'Женщина'
    },
        {
            id: 1,
            name: 'Мужчина'
        },]
    const personStatus=[{
        id:1,
        name:'Школьник'
    },{
        id:2,
        name:'Студент'
    },{
        id:3,
        name:'Специалист'
    }]
    function saveButton(){
        axios.put( "https://test.it-planet.org/user/profile/personal",{
            firstname:firstName,
            lastname:lastName,
            sex:sexId,
            personStatusId:status,
            languageCode:"Ru",
            location:{
                languageCode: "RU",
                country:{
                    code:currentCountry.code,
                        currencyCodes:["USD"],
                    name:currentCountry.name,
                    wikiDataId:currentCountry.wikiDataId
                },
                region:{
                    countryCode: currentRegion.countryCode,
                    fipsCode: currentRegion.fipsCode,
                    isoCode: currentRegion.isoCode,
                    name: currentRegion.name,
                    wikiDataId: currentRegion.wikiDataId
                },
                city:{
                    id:currentcity.id,
                    wikiDataId:currentcity.wikiDataId,
                    type:currentcity.type,
                    city:currentcity.city,
                    name:currentcity.name,
                    regionCode:currentcity.regionCode,
                    countryCode:currentcity.countryCode
                }
            }

        },tokenHeader).then((res)=>{
            console.log(res.data)
        })
    }

    console.log(currentcity)
    return (
        <div className={'mainPageWrapper'}>
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
                <div style={{fontSize: '16px', color: '#0047FF', fontWeight: '700px'}}>Личные данные</div>
            </div>
            <div className={'p-4'}>
                <p className={'personalPageForPTag'}>Если ты заполнишь это поле, то получишь возможности общаться с
                    людьми, получать бонусы</p>
                <div>
                    <input type="text" className={'anketaPageInput'} placeholder={'Фамилия'} onChange={event => setLastName(event.target.value)}/>
                    <input type="text" className={'anketaPageInput'} placeholder={'Имя'} onChange={event => setFirsName(event.target.value)}/>
                    <input type="text" className={'anketaPageInput'} placeholder={'Отчество'}onChange={event => setParentName(event.target.value)}/>
                    <select name="sex" id="" className={'anketaPageInput'} onChange={event => setSex(event.target.value)}>
                        <option value="">Пол</option>
                        {sex.map((value, index) => {
                            return <option value={value.id}>{value.name}</option>
                        })}
                    </select>
                    <select name="" id="" className={'anketaPageInput'} onChange={event => setStatus(event.target.value)}>
                        <option value="">Статус</option>
                        {personStatus.map((value, index) => {
                            return <option value={value.id}>{value.name}</option>
                        })}
                    </select>
                    <input type="date" className={'anketaPageInput'} onChange={event => setBirth(event.target.value)}/>
                    <select className={'anketaPageInput'} onChange={(e) => setCurrentCountry(country[e.target.value])}>
                        <option value="">Cтрана</option>
                        {country.map((value, index) => {
                            return <option value={index}>{value.name}</option>
                        })}
                    </select>
                    <select className={'anketaPageInput'} onChange={(e) => setCurrentRegion(region[e.target.value])}>
                        <option value="">Регион</option>
                        {region.map((value, index) => {
                            return <option value={index}>{value.name}</option>
                        })}
                    </select>
                    <select className={'anketaPageInput'}  onChange={(e) => setCurrentCity(city[e.target.value])}>
                        <option value="">Город</option>
                        {city.map((value, index) => {
                            return <option value={index}>{value.name}</option>
                        })}
                    </select>
                    <button className={'personalPageForButton'} onClick={()=>saveButton()}>Сохранить</button>
                </div>
            </div>
        </div>
    );
};

export default PersonalPage;