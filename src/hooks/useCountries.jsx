import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "../services/GlobalContext";
import { useParams } from "react-router-dom";

const singleCountryUrl = "https://restcountries.com/v3.1/alpha/";

export function useCountries() {
  const {
    state: { countriesData },
  } = useGlobalContext();
  const { country } = useParams();
  const { cca3 } = countriesData.find((item) => item.name.common === country);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["singleCountryApi", cca3],
    queryFn: () =>
      fetch(`${singleCountryUrl}${cca3}`).then((res) => res.json()),
  });

  if (isLoading) {
    return { isLoading };
  }

  if (isError) {
    return { isError };
  }

  const countryDetails = data.map((country) => {
    const {
      name: { common, nativeName = {} } = {},
      population,
      region,
      subRegion = "none",
      capital: [capital] = "none",
      borders = [],
      flags: { png },
      cca3,
      currencies = {},
      tld = [],
      languages = {},
    } = country;

    const officialLanguages = Object.entries(languages);
    const officialName = Object.values(nativeName)[0]?.official;
    const officialCurrencies = Object.entries(currencies).map((item) => {
      const code = item[0];
      const name = item[1].name;
      return { code, name };
    });
    const officialPopulation = population.toLocaleString();

    const officialBorders = countriesData.filter((item) => {
      return borders.includes(item.cca3);
    });

    const details = Object.entries({
      "native Name": officialName || "none",
      population: officialPopulation,
      region,
      "Sub Region": subRegion,
      capital,
    });

    return {
      common,
      borders: officialBorders,
      details,
      png,
      cca3,
      currencies: officialCurrencies || "none",
      tld,
      languages: officialLanguages || "none",
    };
  });

  return countryDetails;
}
