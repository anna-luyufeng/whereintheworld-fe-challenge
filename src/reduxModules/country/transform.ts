export const transformGetAllCountries = (response: CountryList[]) =>
  response.map(transformCountryList);

export const transformCountryList = (country: CountryList) => {
  const { alpha3Code = "", capital } = country;

  return {
    ...country,
    alpha3Code: alpha3Code.toLowerCase(),
    capital: capital || "-",
  };
};

export const transformCountry = (country: CountryWithFullBorders) => {
  const {
    alpha3Code = "",
    borders = [],
    capital,
    currencies = [],
    languages = [],
    population,
    topLevelDomain = [],
  } = country;

  return {
    ...country,
    alpha3Code: alpha3Code.toLowerCase(),
    borders: borders.map((border) => ({
      ...border,
      alpha3Code: border.alpha3Code?.toLowerCase(),
    })),
    capital: capital || "-",
    currencies:
      currencies.length === 0
        ? "-"
        : currencies.map((currency) => currency.name).join(", "),
    languages: languages.map((language) => language.name).join(", "),
    population: population.toLocaleString(),
    topLevelDomain: topLevelDomain[0],
  };
};
