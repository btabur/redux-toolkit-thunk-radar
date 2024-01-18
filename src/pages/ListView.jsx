import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { useSelector } from 'react-redux'

const ListView = ({openModal}) => {
  const state = useSelector((store)=>store)
  return (
    <div>
      <table className='table table-dark table-hover'>
        <thead>
          <tr> 
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
          {state.flights.map((fly)=>(
            <tr>
              <td>{fly.id}</td>
              <td>{fly.code}</td>
              <td>{fly.lat}</td>
              <td>{fly.lng}</td>
              <td>
                <button onClick={()=>openModal(fly.id)}>Detay</button>
              </td>
            
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default ListView
