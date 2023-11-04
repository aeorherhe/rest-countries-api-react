import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <StyledErrorPage>
      <img src="/not-found.svg" alt="" />
      <Link to="/">back to home page</Link>
    </StyledErrorPage>
  );
};
export default ErrorPage;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledErrorPage = styled.div`
  position: absolute;
  inset: 0;
  background-color: var(--White);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  img {
    width: 100%;
    max-width: 500px;
  }

  a {
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--Text);
    text-decoration: none;
    border-bottom: var(--line);
    transition: var(--transition);
  }
`;
