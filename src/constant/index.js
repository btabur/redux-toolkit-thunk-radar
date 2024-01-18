export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '35.045833',
      bl_lng: '25.685801',
      tr_lat: '41.457224',
      tr_lng: '45.065685',
      limit: '300'
    },
    headers: {
      'X-RapidAPI-Key': '28f66ef8c2mshf0f2a43acd94a34p1552fejsn50d66535fa1c',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };

 export const optionsDetail = {
  
    headers: {
      'X-RapidAPI-Key': '28f66ef8c2mshf0f2a43acd94a34p1552fejsn50d66535fa1c',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };
  