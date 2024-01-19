import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'


const ListView = ({openModal}) => {
  const state = useSelector((store)=>store)

  const [itemOffset, setItemOffset] = useState(10);

 //sayfa başına eleman sayısı
const itemsPerPage = 10;
//gösterilecek son elemanı tespit ediyor
  const endOffset = itemOffset + itemsPerPage;
//gösterilecek elemanları diziden alıyor
  const currentItems = state?.flights.slice(itemOffset, endOffset);
  //toplam kaç sayfa olduğunu belirliyor
  const pageCount = Math.ceil(state?.flights.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    //gösterilecek yeni elemanları hesaplar
    const newOffset = (event.selected * itemsPerPage) % state?.flights.length;
    
    setItemOffset(newOffset);
  };
  return (
    <div className='p-4'>
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
          {currentItems.map((fly)=>(
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

      <ReactPaginate className='pagination' activeClassName='active' pageCount={pageCount} onPageChange={handlePageClick} nextLabel='ileri >' previousLabel='< geri '/>
      
    </div>
  )
}

export default ListView
