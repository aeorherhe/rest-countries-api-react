/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Countries from "./components/ui/Countries";
import Header from "./components/ui/Header";
import { useGlobalContext } from "./services/GlobalContext";
import { baseUrl, fetchCountries } from "./services/countriesData";
import Overlay from "./components/utils/Overlay";

const getCountries = {
  queryKey: ["countriesApi"],
  queryFn: () => fetchCountries(baseUrl),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(getCountries);
  return response;
};

function App() {
  const {
    dispatch,
    state: { showFilters },
  } = useGlobalContext();
  const data = useLoaderData();

  useEffect(() => {
    dispatch({
      type: "set_countries",
      payload: data,
    });
  }, [dispatch, data]);

  return (
    <StyledApp>
      <Header />
      <Countries />
      {showFilters && <Overlay />}
    </StyledApp>
  );
}

export default App;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledApp = styled.section`
  margin: 2rem auto;
  padding: 0 1rem;
  max-width: var(--max-width);
`;
