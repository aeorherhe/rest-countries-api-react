/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";

function Country({ country }) {
  const { common, population, region, capital, flag } = country;

  return (
    <StyledCountry>
      <Link to={`${common}`} className="details">
        <div className="flag">
          <img src={flag} alt={common} />
        </div>
        <div className="info">
          <h3>{common}</h3>
          <p>
            <strong>population</strong> : <span>{population}</span>
          </p>
          <p>
            <strong>region</strong> : <span>{region}</span>
          </p>
          <p>
            <strong>capital</strong> : <span>{capital}</span>
          </p>
        </div>
      </Link>
    </StyledCountry>
  );
}

export default Country;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledCountry = styled.article`
  .details {
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .info {
    padding: 1rem;
  }

  p {
    margin-bottom: 0.25rem;
    text-transform: capitalize;
  }
`;
