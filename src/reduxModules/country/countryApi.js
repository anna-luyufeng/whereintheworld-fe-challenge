import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { transformGetAllCountries } from "./transform";

export const countryApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v2" }),
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => ({
        url: "/all",
        params: {
          fields: "name,population,region,capital,flag,alpha3Code",
        },
      }),
      transformResponse: transformGetAllCountries,
    }),
    getCountryByAlpha3Code: builder.query({
      query: (code) => ({
        url: `/alpha/${code}`,
        params: {
          fields:
            "name,capital,population,flag,nativeName,region,subregion,topLevelDomain,currencies,languages,borders",
        },
      }),
    }),
    getCountryNameByAlpha3Code: builder.query({
      query: (code) => ({
        url: `/alpha/${code}`,
        params: {
          fields: "name,alpha3Code",
        },
      }),
    }),
  }),
});

export const {
  useGetAllCountriesQuery,
  useGetCountryByAlpha3CodeQuery,
  useGetCountryNameByAlpha3CodeQuery,
} = countryApi;
