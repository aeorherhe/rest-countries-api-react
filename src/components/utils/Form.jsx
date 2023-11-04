import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { useGlobalContext } from "../../services/GlobalContext";

export function Form() {
  const {
    dispatch,
    state: { search },
  } = useGlobalContext();
  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">
        <BiSearch />
      </label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) =>
          dispatch({ type: "set_search", payload: e.target.value })
        }
      />
    </StyledForm>
  );
}

/****************** styled component ***************/
/****************** styled component ***************/

const StyledForm = styled.form`
  box-shadow: var(--box-shadow);
  background-color: var(--Element);
  border-radius: var(--border-radius);
  margin: 1rem 0;
  display: flex;
  padding: 0.5rem 2rem;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;

  input {
    border: none;
    /* border: 2px solid red; */
    width: 100%;
    color: var(--Input);
    padding: 0.75rem 1rem;
    font-size: 1.25rem;
    border-radius: var(--border-radius);
    background-color: var(--Element);

    &:focus {
      outline: none;
    }
  }

  input::placeholder {
    font-size: 1.25rem;
  }

  @media (min-width: 50rem) {
    border-radius: 0.5rem 0 0 0.5rem;
    box-shadow: none;
    margin: 0;
  }
`;
