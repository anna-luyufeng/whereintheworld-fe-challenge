import { combineReducers } from "@reduxjs/toolkit";

import { countryApi } from "./country/countryApi";

export default combineReducers({
  [countryApi.reducerPath]: countryApi.reducer,
});
