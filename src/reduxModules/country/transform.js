export const transformCountry = (country) => {
  const {
    alpha3Code = "",
    borders = [],
    currencies = [],
    languages = [],
    population,
    topLevelDomain = [],
  } = country;

  return {
    ...country,
    alpha3Code: alpha3Code.toLowerCase(),
    borders: borders.map((border) => border.toLowerCase()),
    currencies: currencies.map((currency) => currency.name).join(", "),
    languages: languages.map((language) => language.name).join(", "),
    population: population.toLocaleString(),
    topLevelDomain: topLevelDomain[0],
  };
};

export const transformGetAllCountries = (response) =>
  response.map(transformCountry);
