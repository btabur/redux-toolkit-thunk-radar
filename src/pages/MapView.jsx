import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import L,{icon} from 'leaflet' 


const MapView = ({openModal}) => {
  const state = useSelector((store)=>store);

  const icon =   L.icon({
    iconUrl:'/plane-i.png',
    iconSize:[25,25],
    iconAnchor:[16,16]
})
  return (
    <MapContainer 
    center={[38.79,35.3666]}
     zoom={6}
      scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* ekranda ki imlecin koordinatları ne kadar çok olursa o kadar konum iconu çıkar */}
     {state.flights.map((fly)=>(
          <Marker icon={icon} key={fly.id} position={[fly.lat, fly.lng]}>
          {/* icona tılanınca üzerinde çıkan yazı */}
          <Popup>
            <div className="popup">
              <span>{fly.code}</span>
              <button onClick={()=>openModal(fly.id)}>Detay</button>
            </div>
          </Popup>
        </Marker>
     ))}

     <Polyline positions={state.route}/>
    </MapContainer>
  );
};

export default MapView;
