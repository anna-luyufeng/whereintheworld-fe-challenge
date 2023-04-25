import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers";
import { countryApi } from "./country/countryApi";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware),
});
