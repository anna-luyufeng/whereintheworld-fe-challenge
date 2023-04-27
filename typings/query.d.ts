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

interface Country {
    alpha3Code: string;
    borders: string[];
    capital: string;
    currencies: Currency[];
    flag: string;
    languages: Language[];
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    topLevelDomain: string[];
}