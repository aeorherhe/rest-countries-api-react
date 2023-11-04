import styled from "styled-components";
import Country from "../utils/Country";
import { nanoid } from "nanoid";
import ListPagination from "../utils/ListPagination";
import { useCountryData } from "../../hooks/useCountryData";

const Countries = () => {
  const countriesData = useCountryData();
  // console.log(countriesData);

  return (
    <StyledCountries>
      <ListPagination />
      <div className="countries">
        {countriesData.map((country) => {
          return <Country key={nanoid()} country={country} />;
        })}
      </div>
    </StyledCountries>
  );
};
export default Countries;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledCountries = styled.section`
  margin: 2rem auto;
  padding: 2rem 0;

  .countries {
    margin: 2rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 4rem;
    cursor: pointer;
    transition: var(--transition);

    :hover {
      transform: scale(1.01);
      transition: var(--transition);
    }
  }
`;
