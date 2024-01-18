import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
   const state = useSelector((store)=>store)
  return (
    <header>
     <div>
     <img src="/plane-l.png" alt="logo" />
        <h3>Uçuş Bulundu</h3>
     </div>
      <p>{state.isLoading
       ? 'Uçuşlar aranıyor...'
       : !state.isError 
       ? `${state.flights.length} Uçuş Bulundu` 
       : 'Hata oluştu'}</p>
    </header>
  )
}

export default Header
