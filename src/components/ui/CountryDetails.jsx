import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useCountries } from "../../hooks/useCountries";

const CountryDetails = () => {
  const countryDetails = useCountries();
  const navigate = useNavigate();

  if (countryDetails.isLoading) {
    return <div>Loading...</div>;
  }

  if (countryDetails.isError) {
    return <div>There was an error</div>;
  }

  const {
    common: name,
    details,
    png: flag,
    tld: topLevelDomain,
    currencies,
    languages,
    borders,
  } = countryDetails[0];

  return (
    <StyledCountryDetails>
      <button className="back-btn btn" onClick={() => navigate(-1)}>
        <BiArrowBack />
        Back
      </button>
      <div className="country">
        <div className="flag">
          <img src={flag} alt={name} />
        </div>
        <div className="info">
          <h2>{name}</h2>
          <div className="details">
            <div className="left">
              {details.map((item, index) => {
                return (
                  <div className="left" key={index}>
                    <p>
                      <strong>{item[0]}: </strong>
                      <span>{item[1]}</span>
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="right">
              <p>
                <strong>top level doman: </strong>
                <span> {topLevelDomain}</span>
              </p>
              <p className="currencies">
                <strong>currencies: </strong>
                {currencies.length > 0
                  ? currencies.map((item, index) => {
                      return (
                        <span key={index}>
                          {item.name} ({item.code})
                        </span>
                      );
                    })
                  : "none"}
              </p>
              <p className="languages">
                <strong>languages: </strong>
                {languages.length > 0
                  ? languages.map((item, index) => {
                      return (
                        <span key={index}>
                          {item[1]} ({item[0]})
                        </span>
                      );
                    })
                  : "none"}
              </p>
            </div>
          </div>

          <div className="borders">
            <h3>border countries</h3>
            <div className="links">
              {borders.length > 0 ? (
                borders.map((item, index) => {
                  return (
                    <Link to={`/${item.name.common}`} key={index}>
                      {item.name.common}
                    </Link>
                  );
                })
              ) : (
                <p>none</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </StyledCountryDetails>
  );
};
export default CountryDetails;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledCountryDetails = styled.section`
  width: 90vw;
  margin: 0 auto;
  padding: 2rem;
  text-transform: capitalize;

  .flag {
    width: 100%;
    max-width: 50rem;
    margin: 3rem auto;
  }

  strong {
    font-weight: 600;
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .left,
  .right {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .borders {
    margin-top: 2rem;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
  }

  a,
  .back-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    background-color: var(--Element);
    padding: 1rem 2rem;
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
    color: var(--Text);
    transition: var(--transition);
    cursor: pointer;

    &:hover {
      box-shadow: var(--box-shadow-hover);
    }
  }

  .currencies,
  .languages {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 55rem) {
    max-width: var(--max-width);
    margin: 5rem auto;

    .country {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      margin: 2rem auto;
    }

    .flag {
      margin: 0;
    }

    .info {
      margin: 0;
    }

    .details {
      flex-direction: row;
      justify-content: space-between;
      max-width: 40rem;
    }
  }
`;
