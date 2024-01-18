import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { optionsDetail } from '../constant'
import Loading from './Loading'
import { useDispatch } from 'react-redux'
import { setRoute } from '../redux/slices/flightsSlice'


const DetailModal = ({detailId,closeModal}) => {
    const [detail,setDetail] =useState(null);
    const dispatch = useDispatch();

    useEffect(()=> {
        //eski verilerin silinmesi lazım ki loading bileşeninin tetklenmesi için 
        setDetail(null)
        axios.get(`https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,optionsDetail)
        .then((res)=>{
            setDetail(res.data);
            dispatch(setRoute(res.data.trail))
        })
    },[detailId])
  return (
    <div className='detail-outher'>
        <div className='detail-inner'>
            <p onClick={closeModal} className='close'>
            <span>X</span>
            </p>
            {!detail ? <Loading/>:
                <div>
                    <h2>{detail.aircraft.model.text}</h2>
                    <h2>{detail.aircraft.model.code}</h2>
                    <p>
                        <span>Kuyruk No:</span> 
                        <span>{detail.aircraft.registration}</span> 
                    </p>
                    <img className='img-plane' src={detail.aircraft?.images?.large[0].src} alt="" />
                    <p>
                        <span>Kalkış : </span>
                        <a target='_blank' href={detail.airport.origin?.website}>{detail.airport.origin.name}</a>
                    </p>
                    <p>
                        <span>Hedef : </span>
                        <a target='_blank' href={detail.airport.destination.website}>{detail.airport.destination.name}</a>
                    </p>
                    <p>
                        <span>Durum : </span>
                        <span className={`status ${detail.status.icon}`}>{detail.status.text}</span>
                    </p>
                </div>
            }
        </div>
    </div>
  )
}

export default DetailModal
