import { useGlobalContext } from "../services/GlobalContext";

export const useCountryData = () => {
  const {
    state: { countriesPerPage },
  } = useGlobalContext();

  const displayedCountries = countriesPerPage.map((country) => {
    const {
      name: { common },
      population,
      region,
      capital,
      flags: { png },
    } = country;
    return {
      common,
      population: population.toLocaleString(),
      region,
      capital,
      flag: png,
    };
  });

  return displayedCountries;
};
