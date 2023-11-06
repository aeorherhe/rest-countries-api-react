/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { BsChevronDown } from "react-icons/bs";
import { useGlobalContext } from "../../services/GlobalContext";
// import { useEffect, useRef } from "react";

export function Filter() {
  const {
    state: { regions, showFilters, filter },
    dispatch,
  } = useGlobalContext();

  return (
    <StyledFilter type={showFilters.toString()}>
      <div
        className="title"
        onClick={() => dispatch({ type: "set_showFilters" })}
      >
        <p>Filter by Region</p>
        <p>{filter}</p>
        <div className="down">
          <BsChevronDown />
        </div>
      </div>
      {showFilters && (
        <ul className="filters">
          {regions.map((region) => (
            <SingleFilter region={region} key={region} />
          ))}
        </ul>
      )}
    </StyledFilter>
  );
}

const SingleFilter = ({ region }) => {
  const {
    state: { filter: currentFilter },
    dispatch,
  } = useGlobalContext();

  return (
    <li
      onClick={() => dispatch({ type: "set_filter", payload: region })}
      className={region === currentFilter ? "active" : ""}
    >
      {region}
    </li>
  );
};

/****************** styled component ***************/
/****************** styled component ***************/

const StyledFilter = styled.div`
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  background-color: var(--Element);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 11;

  .title {
    padding: 0.25rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
    transition: var(--transition);
    width: 100%;
    &:hover {
      color: var(--Input);
    }
  }

  .filters {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    flex-wrap: wrap;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--Element);
    width: 100%;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    padding: 1.5rem;
    margin-top: 0.5rem;
  }

  .filters li {
    cursor: pointer;
    transition: var(--transition);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;

    &:hover {
      background-color: var(--Input);
      color: var(--Element);
    }
  }

  .down {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      color: var(--Input);
    }

    ${({ type }) =>
      type === "true" &&
      css`
        transform: rotate(180deg);
      `}
  }

  .active {
    background-color: var(--Input);
    color: var(--Element);
  }

  @media (min-width: 50rem) {
    border-radius: 0 0.5rem 0.5rem 0;
    box-shadow: none;

    .title {
      /* padding: 0.5rem 1rem; */
      margin: 0;
    }
  }
`;
