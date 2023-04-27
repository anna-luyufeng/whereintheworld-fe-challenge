type Language = {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

type Currency = {
    code: string;
    name: string;
    symbol: string;
}

interface CountryBorder {
    alpha3Code: string;
    name: string;
}

interface CountryList {
    alpha3Code: string;
    name: string;
    capital: string;
    flag: string;
    independent: boolean;
    population: number;
    region: string;
}

interface CountryDetail extends CountryList {
    borders: CountryBorder['name'][];
    currencies: Currency[];
    languages: Language[];
    subregion: string;
    topLevelDomain: string[];
    nativeName: string;
}

interface CountryWithFullBorders extends Omit<CountryDetail, 'borders'> {
    borders: CountryBorder[];
}

interface TransformedCountryDetail
    extends Omit<
        CountryWithFullBorders,
        "currencies" | "languages" | "population" | "topLevelDomain"
    > {
    currencies: string;
    languages: string;
    population: string;
    topLevelDomain: string;
}
