import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import MapView from './pages/MapView'
import ListView from './pages/ListView'
import { useDispatch } from 'react-redux'
import { getFlights } from './redux/actions/flightAction'
import DetailModal from './components/DetailModal'

const App = () => {
  const [showMapView,setShowMapView] = useState(true);
  const dispatch= useDispatch();
  const [showDetail,setShowDetail]=useState(false);
  const [detailId,setDetailId] = useState(null)
  useEffect(()=>{
    dispatch(getFlights())
  },[])

  //modalı açar

  const openModal =(id)=>{
    setDetailId(id);
    setShowDetail(true)
  }
  return (
    <div> 
      <Header/>
      <div className="view-buttons">
        <button  className={showMapView && 'active'} onClick={()=>setShowMapView(true)}>Harita Görünümü</button>
        <button className={!showMapView && 'active'} onClick={()=>setShowMapView(false)}>Liste Görünümü</button>
      </div>
      
       {showMapView ? ( <MapView 
                       openModal={openModal} />) 
                    :(<ListView  
                    openModal={openModal} />)}

                    {/* modalı gösterme */}
        {showDetail && <DetailModal detailId={detailId} closeModal={()=>setShowDetail(false)}/>}
      
    </div>
  )
}

export default App
