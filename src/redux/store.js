import { configureStore } from "@reduxjs/toolkit";
import flightsSlice from "./slices/flightsSlice";

export default configureStore({reducer:flightsSlice})