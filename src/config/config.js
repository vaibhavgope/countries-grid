export const BASE_URL = "https://restcountries.eu/rest/v2"

export const routes = {
    regionRoute: "/region/",
    searchRoute: "/name/",
    primaryRoute: "/all"
}

export const countryDetails = (data) => {
    return [
        {
            title: "Native name:",
            value: data.nativeName,
        },
        {
            title: "Top level domain:",
            value: data.topLevelDomain,
        },
        {
            title: "Population:",
            value: data.population
        },
        {
            title: "Currencies:",
            value: data.currencies.map((e) => e.name).join(",")
        },
        {
            title: "Region:",
            value: data.region
        },
        {
            title: "Languages:",
            value: data.languages.map((e) => e.name).join(",")
        },
        {
            title: "Sub region:",
            value: data.subregion
        },
        {
            title: "Capital:",
            value: data.capital
        }
    ]
}

export const regions = ['Americas', 'Europe', 'Asia', 'Africa', 'Oceania']