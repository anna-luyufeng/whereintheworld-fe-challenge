import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { transformCountry, transformGetAllCountries } from "./transform";

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
      async queryFn(code, _queryApi, _extraOptions, fetchWithBQ) {
        const countryResult = await fetchWithBQ({
          url: `/alpha/${code}`,
          params: {
            fields:
              "name,capital,population,flag,nativeName,region,subregion,topLevelDomain,currencies,languages,borders",
          },
        });

        if (countryResult.error)
          return { error: countryResult.error as FetchBaseQueryError };

        const countryBorders = (countryResult.data as CountryDetail).borders;

        async function fetchCountryBorderData(border: string) {
          const response = await fetchWithBQ({
            url: `/alpha/${border}`,
            params: {
              fields: "name,alpha3Code",
            },
          });
          return response.data;
        }

        const countryBordersResults = await Promise.all(
          countryBorders.map((border) => fetchCountryBorderData(border))
        );

        return {
          data: transformCountry({
            ...(countryResult.data as CountryDetail),
            borders: (countryBordersResults as CountryBorder[]).filter(Boolean),
          }),
        };
      },
    }),
  }),
});

export const { useGetAllCountriesQuery, useGetCountryByAlpha3CodeQuery } =
  countryApi;
