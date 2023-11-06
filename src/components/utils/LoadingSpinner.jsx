import styled from "styled-components";

const LoadingSpinner = () => {
  return <StyledSpinner></StyledSpinner>;
};
export default LoadingSpinner;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledSpinner = styled.div`
  animation: loading-spinner 0.5s linear infinite;
  border-radius: 50%;
  border: 5px solid var(--Orange);
  border-top-color: var(--White);
  height: 6rem;
  margin: 5rem auto;
  width: 6rem;

  @keyframes loading-spinner {
    to {
      transform: rotate(360deg);
    }
  }
  /* end of loading state */
`;
