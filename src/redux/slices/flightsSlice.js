import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions/flightAction";

const initialState ={
    flights:[],
    isLoading:true,
    isError:false,
    route:[] //detayına baktığımız uçak rotası
}

const flightsSlice = createSlice({
    name:"flights",
    initialState,
    extraReducers:(builder)=> {
        builder.addCase(getFlights.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(getFlights.fulfilled,(state,actions)=>{
            state.flights = actions.payload;
            state.isLoading=false;
            state.isError=false;
        })
        builder.addCase(getFlights.rejected,(state,actions)=>{
            state.isError=true;
            state.isLoading=false;
        })
    },
    reducers:{
        setRoute:(state,action)=> {
            const data = action.payload.map((i)=>([i.lat,i.lng]))
            state.route=data;
        }
    }
});

export const {setRoute} = flightsSlice.actions;

export default flightsSlice.reducer;
