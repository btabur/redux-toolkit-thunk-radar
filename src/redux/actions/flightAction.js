import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constant";

export const getFlights = createAsyncThunk(
    'flight/getFlight',
    async()=>{
    const res = await axios.request(options);

    //uçuşlar dizisini dönüp her bir dizi için bir obje oluşturduk
 const newData = res.data.aircraft.map((item)=> ({
        id:item[0],
        code: item[1],
        lat: item[2],
        lng: item[3],
      
    }))
        return newData;
    }
    
    )