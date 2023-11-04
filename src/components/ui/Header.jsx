import styled from "styled-components";
import { Filter } from "../utils/Filter";
import { Form } from "../utils/Form";

const Header = () => {
  return (
    <StyledHeader>
      <div className="form-control">
        <Form />
        <Filter />
      </div>
    </StyledHeader>
  );
};
export default Header;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledHeader = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-transform: capitalize;

  .form-control {
    width: 100%;
    max-width: 50rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media screen and (min-width: 50rem) {
    .form-control {
      border-radius: var(--border-radius);
      width: 100%;
      max-width: 100%;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: 0rem;
      box-shadow: var(--box-shadow);
      padding: 0;
    }
  }
`;
